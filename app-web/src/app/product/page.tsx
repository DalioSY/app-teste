import { SquarePlus } from 'lucide-react';
import Link from 'next/link';

export default function Product() {
  return (
    <div className='flex flex-col items-center justify-center bg-background m-16'>
      <h1 className=' text-6xl'>Product</h1>
      <Link href='/product/create'>
        <SquarePlus />
      </Link>
    </div>
  );
}
