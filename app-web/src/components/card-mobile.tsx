import Image from 'next/image';
import bolo from '../../public/bolo.png';

export function CardMobile() {
  return (
    <div className=' m-5 rounded-xl dark:bg-[#232323] p-3 sm:hidden'>
      <div className='m-2 flex flex-row'>
        <Image
          src={bolo}
          alt='produto'
          className='h-[67px] w-[67px] rounded-md'
        ></Image>

        <div className='w-full  mx-1'>
          <div className='flex flex-row items-center justify-between'>
            <p className='dark:text-white font-semibold'>Bolo de Chocolate</p>
            <p className='dark:text-white text-xs'>
              Data de Cadastro: 20/09/2024
            </p>
          </div>
          <p className=' max-h-[30px] text-xs dark:text-white overflow-clip'>
            Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quos non eligendi ea velit minus dignissimos molestias dolor quia
            nesciunt ut doloribus, veniam tempore illum officiis ipsa odio
            aliquam alias minima.
          </p>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-xs dark:text-white'>Valor: R$ 24,99</p>
            <p className='text-xs dark:text-white'>Quantidade: 20 Unid.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
