'use client';

import { useState } from 'react';
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import Progressbar from './ProgressBar';

const UploadForm = ({
  uploadBtnClick,
  setProgress,
  progress,
  setIsLoading,
}) => {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onFileSelect = (file) => {
    if (file && file.size > 2000000) {
      setErrorMsg('Size is Greater than 2 MB');
      return;
    } else {
      setErrorMsg(null);
      setFile(file);
    }
  };

  return (
    <div className="text-center">
      <div className="flex w-full items-center justify-center px-10">
        <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-primary dark:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-primary dark:text-primary">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-primary dark:text-primary">
              SVG, PNG, JPG or GIF (Max Size: 2MB)
            </p>
          </div>
          <input
            onChange={(e) => onFileSelect(e.target.files[0])}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
      {file ? <FilePreview file={file} removeFile={setFile} /> : null}

      {progress > 0 ? (
        <Progressbar
          setProgress={setProgress}
          progress={progress}
          removeFile={setFile}
          setIsLoading={setIsLoading}
        />
      ) : (
        <button
          onClick={() => uploadBtnClick(file)}
          disabled={!file}
          className="mt-5 w-32 rounded-full bg-primary p-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadForm;
