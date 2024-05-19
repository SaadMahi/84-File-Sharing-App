'use client';

import { db } from '../../../../../firebase/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import Link from 'next/link';
import { SquareArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const FilePreview = ({ params }) => {
  const [fileInfo, setFileInfo] = useState();

  const [enableSaveBtn, setEnableSaveBtn] = useState(false);
  const [password, setPassword] = useState('');

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length >= 3) {
      setEnableSaveBtn(true);
    } else {
      setEnableSaveBtn(false);
    }
  };

  useEffect(() => {
    const getFileInfo = async () => {
      if (params?.fileId) {
        const docRef = doc(db, 'uploadedFile', params?.fileId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFileInfo(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          toast.error('No such document!');
        }
      }
    };

    getFileInfo();
  }, [params?.fileId]);

  // push password to firebase
  const handlePasswordSave = async () => {
    try {
      const docRef = doc(db, 'uploadedFile', params?.fileId);

      // Set password
      await updateDoc(docRef, {
        password: password,
      });
      toast.success('password saved');
      setPassword('');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border py-10 xl:h-[calc(100vh-69px)]">
      <div>
        <Link
          href="/upload"
          className="flex gap-2 self-start pl-2 lg:mb-5 lg:pl-0"
        >
          <SquareArrowLeft />
          <span className="font-semibold">Go To Upload</span>
        </Link>
        <div className="grid grid-cols-1 place-items-center xl:grid-cols-2">
          <FileInfo fileInfo={fileInfo} />

          <FileShareForm
            fileInfo={fileInfo}
            handlePassword={handlePassword}
            enableSaveBtn={enableSaveBtn}
            setPassword={setPassword}
            handlePasswordSave={handlePasswordSave}
            password={password}
          />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
