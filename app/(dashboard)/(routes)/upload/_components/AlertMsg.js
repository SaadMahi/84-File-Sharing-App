import { AlertCircle } from 'lucide-react';

const AlertMsg = ({ msg }) => {
  return (
    <div className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-md bg-red-500 p-4 text-white">
      <AlertCircle />
      {msg}
    </div>
  );
};

export default AlertMsg;
