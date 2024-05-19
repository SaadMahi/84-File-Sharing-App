'use client';

import { Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import SendEmail from '../../../../../_utils/GlobalApi';
import { toast } from 'react-toastify';

const FileShareForm = ({
  fileInfo,
  enableSaveBtn,
  handlePassword,
  handlePasswordSave,
  password,
}) => {
  const inputRef = useRef();

  const [enablePassword, setEnablePassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => toast.success('Copied to clipboard!'))
        .catch((err) => toast.error('Could not copy text: ', err));
    }
  };

  const sendEmail = () => {
    const data = {
      emailToSend: email,
      fileName: fileInfo.fileName,
      fileSize: fileInfo?.fileSize,
      fileType: fileInfo?.fileType,
      userName: fileInfo?.userName,
      shortUrl: fileInfo?.shortUrl,
    };
    SendEmail(data)
      .then((res) => {
        toast.success('Mail sent successfully');
        setEmail('');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <form className="space-y-5">
      <div className="relative flex items-end">
        <div className="space-x-2 px-2">
          <label
            for="shortUrl"
            className="block pl-2 font-medium text-gray-500"
          >
            Short URL
          </label>
          <input
            ref={inputRef}
            className="h-10 rounded-md border border-gray-200 pl-1 pr-10 text-gray-500 sm:min-w-96 sm:px-2"
            type="url"
            id="shortUrl"
            value={fileInfo?.shortUrl}
          />
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="absolute bottom-2 right-5 bg-white text-gray-500 active:scale-95"
        >
          <Copy className="text-gray-500" />
        </button>
      </div>

      <div className="space-x-2 px-2">
        <div className="space-x-2 pl-2">
          <input
            onChange={() => setEnablePassword(!enablePassword)}
            type="checkbox"
          />
          <label className="font-medium">Enable Password ?</label>
        </div>
        {enablePassword && (
          <div className="space-x-3">
            <input
              onChange={handlePassword}
              type="password"
              className="h-10 min-w-80 rounded-md border border-gray-200 px-2 text-gray-500"
              value={password}
            />
            <button
              onClick={handlePasswordSave}
              type="button"
              className={` rounded-lg  p-2 text-white ${!enableSaveBtn || !password ? 'cursor-not-allowed bg-gray-300' : 'cursor-pointer bg-primary'}`}
              disabled={!enableSaveBtn || !password}
            >
              {!fileInfo.password ? 'Save' : 'Update'}
            </button>
          </div>
        )}
      </div>

      <div className="ml-4 space-y-2 rounded-md border border-blue-100 px-2 py-5">
        <div>
          <label for="email" className="block font-medium text-gray-500">
            Send File to Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="h-10 w-full rounded-md border border-gray-200 px-2 text-gray-400 sm:min-w-80"
            placeholder="example@gmail.com"
          />
        </div>

        <button
          onClick={sendEmail}
          type="button"
          className="h-10 w-full rounded-lg bg-primary text-white"
        >
          Send Email
        </button>
      </div>
    </form>
  );
};

export default FileShareForm;
