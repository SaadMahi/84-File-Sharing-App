'use client';

import { useState } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

const layout = ({ children }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div>
      <div
        className={`fixed inset-y-0 z-20 ${!showSideNav ? 'hidden' : 'block'} h-full w-64 flex-col md:flex dark:bg-slate-800`}
      >
        <SideNav setShowSideNav={setShowSideNav} />
      </div>

      <div className="relative md:ml-64">
        <TopHeader setShowSideNav={setShowSideNav} />
        {children}
      </div>
    </div>
  );
};

export default layout;
