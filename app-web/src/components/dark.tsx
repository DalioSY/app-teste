'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import darkIcon from '../../public/dark-icon.png';
import lightIcon from '../../public/light-icon.png';

export function Dark() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);

      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className='flex items-center cursor-pointer' onClick={handleClick}>
      {theme === 'dark' ? (
        <Image src={lightIcon} alt='icon light' />
      ) : (
        <Image src={darkIcon} alt='icon dark' />
      )}
    </div>
  );
}
