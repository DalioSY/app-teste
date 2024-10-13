import { CardMobile } from '@/components/card-mobile';
import { Table } from '@/components/table';
import { SquarePlus } from 'lucide-react';
import Link from 'next/link';

export default function Product() {
  return (
    <>
      <CardMobile />
      <div className=' z-20 absolute right-6 top-24'>
        <Link href='/product/create'>
          <SquarePlus />
        </Link>
        <Table />
      </div>
    </>
  );
}
