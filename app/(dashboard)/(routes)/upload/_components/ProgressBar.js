import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Progressbar = ({
  setProgress,
  progress = 10,
  removeFile,
  setIsLoading,
}) => {
  if (progress === 100) {
    removeFile(null);
    setProgress(0);
    toast.success('Uploaded successfully');
    setIsLoading(true);
  }

  return (
    <div className="mx-auto mt-3 h-5 w-1/2 rounded-full bg-gray-400">
      <div
        className=" h-5 rounded-full bg-primary p-1 text-[10px] text-white"
        style={{
          width: `${progress}%`,
        }}
      >
        {Number(progress).toFixed(0)}%
      </div>
    </div>
  );
};

export default Progressbar;
