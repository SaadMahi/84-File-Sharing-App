import { Download } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const FileItem = ({ fileInfo }) => {
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <div className="space-y-10 rounded-lg bg-white p-10 text-center">
      <div>
        <h1 className="text-2xl">
          <span className="font-semibold text-primary">
            {fileInfo?.userName}{' '}
          </span>
          Shared file with you
        </h1>
        <span className="text-xs font-semibold text-gray-400">
          Find File details below
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <Image
            src="/file.png"
            height={50}
            width={50}
            alt={fileInfo?.fileName}
            className="mx-auto mb-5"
          />
          {fileInfo?.fileName} ⚡ {fileInfo?.fileType} ⚡
          {(fileInfo?.fileSize / 1024 / 1024).toFixed(2)}mb
        </div>

        {fileInfo?.password ? (
          <div>
            <input
              onChange={(e) => setPasswordInput(e.target.value)}
              type="password"
              placeholder="Enter password to access"
              className="rounded-md border text-center"
            />
          </div>
        ) : null}

        <div>
          <button
            disabled={passwordInput !== fileInfo?.password}
            onClick={() => window.open(fileInfo?.fileUrl)}
            className={`mx-auto flex w-full justify-center gap-2 rounded-full border p-2 text-white ${fileInfo?.password !== passwordInput ? 'cursor-not-allowed bg-gray-300' : ' cursor-pointer bg-primary'}`}
          >
            <Download /> Download
          </button>
          <p className="text-xs text-gray-400">*Terms and Condition apply</p>
        </div>
      </div>
    </div>
  );
};

export default FileItem;
