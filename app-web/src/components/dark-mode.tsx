'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import darkIcon from '../../public/dark-icon.png';
import lightIcon from '../../public/light-icon.png';

export function DarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.theme = theme;
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
