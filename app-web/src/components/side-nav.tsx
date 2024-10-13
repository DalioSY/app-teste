'use client';

import {
  AlignJustify,
  Archive,
  Home,
  NotebookText,
  Settings,
} from 'lucide-react';
import logo from '../../public/brigadeiro.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideNav() {
  const navigation = usePathname();

  return (
    <aside className='h-screen w-16 fixed left-0 top-0 z-20 flex flex-col items-center gap-4 bg-background max-sm:hidden'>
      <Image src={logo} alt='logo' className='w-12 h-14 m-3' />
      <div className='flex flex-col items-center gap-4'>
        <Link
          href='/'
          className={`w-9 flex justify-center ${
            navigation === '/' ? 'border-l-4 border-[#7557E8]' : ''
          }`}
        >
          <Home className='h-6 w-6 my-2 hover:text-[#7557E8] ' />
        </Link>
        <Link
          href='/product'
          className={`w-9 flex justify-center ${
            navigation === '/product' ? 'border-l-4 border-[#7557E8]' : ''
          } ${
            navigation === '/product/create'
              ? 'border-l-4 border-[#7557E8]'
              : ''
          }`}
        >
          <NotebookText className='h-6 w-6 my-2 hover:text-[#7557E8]' />
        </Link>
        <Link
          href='/box'
          className={`w-9 flex justify-center ${
            navigation === '/box' ? 'border-l-4 border-[#7557E8]' : ''
          }`}
        >
          <Archive className='h-6 w-9 my-2 hover:text-[#7557E8]' />
        </Link>
        <Link
          href='/settings'
          className={`w-9 flex justify-center ${
            navigation === '/settings' ? 'border-l-4 border-[#7557E8]' : ''
          }`}
        >
          <Settings className='h-6 w-9 my-2 hover:text-[#7557E8]' />
        </Link>
        <Link
          href='/burger'
          className={`w-9 flex justify-center ${
            navigation === '/burger' ? 'border-l-4 border-[#7557E8]' : ''
          }`}
        >
          <AlignJustify className='h-6 w-9 my-2 hover:text-[#7557E8]' />
        </Link>
      </div>
    </aside>
  );
}
