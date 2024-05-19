import { X } from 'lucide-react';
import Image from 'next/image';

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="mt-5 flex  justify-center">
      <div className="flex gap-2 rounded-md border border-blue-400 px-5 py-2">
        <Image src="/file.svg" height={35} width={35} alt="uploaded-file" />
        <div className="flex items-center gap-5">
          <div>
            <h2>{file.name}</h2>
            <h3 className="text-start text-xs text-gray-400">
              {file.type} / {(file.size / 1024 / 1024).toFixed(2)}mb
            </h3>
          </div>
          <X
            onClick={() => removeFile(null)}
            className="cursor-pointer text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
