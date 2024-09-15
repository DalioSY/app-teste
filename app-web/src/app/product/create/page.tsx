import { Undo2 } from 'lucide-react';
import Link from 'next/link';

export default function Create() {
  return (
    <div className='flex flex-col items-center justify-center bg-background m-16'>
      <h1 className=' text-6xl'>Create</h1>
      <Link href='/product'>
        <Undo2 />
      </Link>
    </div>
  );
}
