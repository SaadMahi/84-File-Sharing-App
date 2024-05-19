import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import DarkModeToggle from '../../_components/DarkModeToggle';

const TopHeader = ({ setShowSideNav }) => {
  return (
    <div className="dar flex items-center justify-between gap-5 border-b p-5 md:justify-end">
      <AlignJustify
        onClick={() => setShowSideNav(true)}
        className="cursor-pointer md:hidden"
      />
      <DarkModeToggle />
      <div className="flex items-center gap-2 text-primary md:hidden">
        <Image src="/logo.svg" height={28} width={28} alt="logo" />
        <span className="font-extrabold">File-Share</span>
      </div>
      <UserButton />
    </div>
  );
};

export default TopHeader;
