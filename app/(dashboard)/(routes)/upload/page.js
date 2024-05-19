'use client';

import { db, storage } from '../../../../firebase/firebaseConfig';
import UploadForm from './_components/UploadForm';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../_utils/GenerateRandomString';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Spinner from '../../../_utils/Spinner';

const Upload = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [progress, setProgress] = useState();

  const { user } = useUser();
  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString();

    // Add a new document in collection "uploadedFile"
    await setDoc(doc(db, 'uploadedFile', docId), {
      id: docId,
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: '',
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'fileview/' + docId,
    });

    setIsLoading(false);
    router.push('/file-preview/' + docId);
  };

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, 'file-upload/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            toast.error(error.code);
            break;
          case 'storage/canceled':
            toast.error(error.code);
            break;
          case 'storage/unknown':
            toast.error(error.code);
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveInfo(file, downloadURL);
        });
      },
    );
  };

  return (
    <div>
      <div className="mx-a px-8 py-5 md:px-28">
        <h2 className="m-5 text-center text-xl">
          Start
          <strong className="text-primary"> Uploading </strong>
          File and
          <strong className="text-primary"> Share </strong>
          it
        </h2>
      </div>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
        setProgress={setProgress}
        setIsLoading={setIsLoading}
      />

      {isLoading && <Spinner />}
    </div>
  );
};

export default Upload;
