'use client';

import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

import FileItem from './_components/FileItem';
import Image from 'next/image';
import Link from 'next/link';

const FileView = ({ params }) => {
  const [fileInfo, setFileInfo] = useState();

  const getFileInfo = async () => {
    if (params?.fileid) {
      const docRef = doc(db, 'uploadedFile', params?.fileid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFileInfo(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        toast.error('No such document!');
      }
    }
  };

  useEffect(() => {
    {
      params?.fileid && getFileInfo();
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-gray-100">
      <Link className="flex items-center gap-2 text-primary" href="/">
        <Image src="/logo.svg" height={35} width={35} alt="logo " />
        <span className="font-extrabold">File-Share</span>
      </Link>

      <FileItem fileInfo={fileInfo} />
    </div>
  );
};

export default FileView;
