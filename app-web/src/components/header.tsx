'use client';

import {
  AlignJustify,
  Archive,
  Home,
  NotebookText,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dark } from './dark';

export function Header() {
  const navigation = usePathname();

  return (
    <header className='w-screen h-16 fixed left-0 top-0 z-20 flex items-center justify-between bg-gradient-to-r text-white from-[#7658EA] to-[#5C46B2] pl-28 pr-4'>
      <div
        className={`flex items-center ${navigation === '/' ? '' : 'hidden'}`}
      >
        <Home className='h-6 w-9 my-2' />
        <h1>Home</h1>
      </div>
      <div
        className={`flex items-center ${
          navigation === '/product' ? '' : 'hidden'
        }`}
      >
        <NotebookText className='h-6 w-9 my-2 h' />
        <h1>Product</h1>
      </div>
      <div
        className={`flex items-center ${
          navigation === '/product/create' ? '' : 'hidden'
        }`}
      >
        <NotebookText className='h-6 w-9 my-2 h' />
        <h1>Product</h1>
      </div>
      <div
        className={`flex items-center ${navigation === '/box' ? '' : 'hidden'}`}
      >
        <Archive className='h-6 w-9 my-2' />
        <h1>Box</h1>
      </div>
      <div
        className={`flex items-center ${
          navigation === '/settings' ? '' : 'hidden'
        }`}
      >
        <Settings className='h-6 w-9 my-2' />
        <h1>Settings</h1>
      </div>
      <div
        className={`flex items-center ${
          navigation === '/burger' ? '' : 'hidden'
        }`}
      >
        <AlignJustify className='h-6 w-9 my-2' />
        <h1>Burger</h1>
      </div>
      <Dark />
    </header>
  );
}
