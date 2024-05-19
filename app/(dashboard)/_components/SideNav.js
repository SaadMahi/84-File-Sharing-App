'use client';

import { File, Shield, Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SideNav = ({ setShowSideNav }) => {
  const pathname = usePathname();

  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const currentIndex = menuList.findIndex((item) => item.path === pathname);
    setActiveIndex(currentIndex);
  }, [pathname]);

  return (
    <aside className="h-full border-r shadow-sm">
      <Link
        href="/"
        className="flex items-center gap-2 border-b  p-5 text-primary"
      >
        <Image src="/logo.svg" width={35} height={35} alt="logo" />
        <span className="font-extrabold">File-Share</span>
      </Link>
      <div className="float-left flex w-full flex-col">
        {menuList.map((item, index) => (
          <Link href={item.path}>
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(index);
                setShowSideNav(false);
              }}
              className={`flex w-full gap-2 px-6 py-4 text-gray-500 hover:bg-gray-100 ${
                activeIndex == index
                  ? 'bg-blue-50 text-primary dark:bg-primary dark:text-white'
                  : 'none'
              }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
