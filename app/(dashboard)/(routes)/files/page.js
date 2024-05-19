'use client';

import { collection, query, where, getDocs } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { db } from '../../../../firebase/firebaseConfig';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

import NoListBanner from './_components/NoListBanner';
import Spinner from '../../../_utils/Spinner';
import { toast } from 'react-toastify';

const Files = () => {
  const { user } = useUser();
  const loggedInUser = user?.primaryEmailAddress?.emailAddress;

  const [loggedInUserFiles, setLoggedInUserFiles] = useState([]);

  const [isLoading, setIsLoading] = useState();
  const [fetchComplete, setFetchComplete] = useState(false);

  const getUploadedFiles = async () => {
    setIsLoading(true);

    try {
      const q = query(
        collection(db, 'uploadedFile'),
        where('userEmail', '==', loggedInUser),
      );

      const querySnapshot = await getDocs(q);

      const files = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        if (data.shortUrl) {
          data.shortUrl = data.shortUrl.replace('fileview', 'file-preview');
        }

        files.push(data);
      });
      setLoggedInUserFiles(files);
      setIsLoading(false);
      setFetchComplete(true);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      getUploadedFiles(loggedInUser);
    }
  }, [loggedInUser]);

  if (isLoading) {
    return <Spinner />;
  }

  if (fetchComplete && loggedInUserFiles.length === 0) {
    return <NoListBanner />;
  }

  return loggedInUserFiles.length > 0 ? (
    <section className="py-1 text-black dark:text-white">
      <div className="mx-auto mb-12 mt-24 w-full px-4 xl:mb-0 xl:w-8/12">
        <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg dark:bg-slate-700 ">
          <div className="mb-0 rounded-t border-0 px-4 py-3">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-1 flex-grow px-4">
                <h3 className="text-base font-semibold">Total Files</h3>
              </div>
              <div className="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
                <h2>{loggedInUserFiles.length}</h2>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="w-full border-collapse items-center bg-transparent">
              <thead>
                <tr>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-300 px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    File name
                  </th>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-300 px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Type
                  </th>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-300 px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Size
                  </th>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-300 px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {loggedInUserFiles.map((file) => (
                  <tr key={file.id}>
                    <th className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                      {file.fileName}
                    </th>
                    <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                      {file.fileType}
                    </td>
                    <td className="align-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-xs">
                      {file.fileSize}
                    </td>
                    <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-primary">
                      <Link href={file.shortUrl}>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default Files;
