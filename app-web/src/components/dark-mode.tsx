'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import darkIcon from '../../public/dark-icon.png';
import lightIcon from '../../public/light-icon.png';

export function DarkMode() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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
