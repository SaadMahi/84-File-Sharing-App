import Image from 'next/image';

const FileInfo = ({ fileInfo }) => {
  return (
    <div className="flex flex-col items-center space-y-6 rounded-lg border-blue-100 p-11 lg:border">
      <div className="relative h-[250px] w-[300px] overflow-hidden rounded-lg">
        <Image
          src={fileInfo?.fileUrl}
          width={300}
          height={300}
          alt={fileInfo?.fileName}
          className="mx-auto rounded-lg"
        />
      </div>

      <div className="text-center">
        <h2 className="text-lg">{fileInfo?.fileName}</h2>

        <p className="text-xs text-gray-400">
          {fileInfo?.fileType} {(fileInfo?.fileSize / 1024 / 1024).toFixed(2)}mb
        </p>
      </div>
    </div>
  );
};

export default FileInfo;
