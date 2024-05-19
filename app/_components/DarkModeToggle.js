'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const DarkModeToggle = () => {
  const themeVal = localStorage.getItem('theme');

  const [selected, setSelected] = useState(themeVal);
  return <SliderToggle selected={selected} setSelected={setSelected} />;
};

const SliderToggle = ({ selected, setSelected }) => {
  const { theme, setTheme } = useTheme();

  const TOGGLE_CLASSES =
    'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'light' ? 'text-white' : 'text-slate-300'
        }`}
        onClick={() => {
          setSelected('light');
          setTheme('light');
        }}
      >
        <Moon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10 hidden md:block">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={() => {
          setSelected('dark');
          setTheme('dark');
        }}
      >
        <Sun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10 hidden md:block">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-primary"
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
