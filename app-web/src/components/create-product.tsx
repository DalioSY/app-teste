'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Undo2, Upload } from 'lucide-react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

const productSchema = z.object({
  name: z.string().min(1, { message: ': Não pode' }),
  observations: z
    .string()
    .min(1, { message: ': Não pode' })
    .max(100, { message: ': Limite maximo 100' }),
  price: z.string().min(1, { message: ': Não pode ser Zero' }),
  amount: z.coerce.number().min(1, { message: ': Não pode ser Zero' }),
  file: z
    .string()
    .refine((file) => {
      return file?.length > 0;
    }, 'Carregue um arquivo')
    .refine((file) => {
      return file[0]?.size <= 2000000;
    }, 'Carregue arquivos de até 2mb')
    .refine((file) => {
      return file[0]?.type === 'image/jpeg' || file[0]?.type === 'image/png';
    }, 'Carregue apenas arquivos JPEG ou PNG'),
});

type ProductSchema = z.infer<typeof productSchema>;

export function CreateProduct() {
  const [charCount, setCharCount] = useState(0);

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      observations: '',
      price: '',
      amount: 0,
      file: '',
    },
  });

  function onSubmit(data: ProductSchema) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-2xl'>
          <div className=' p-8 flex items-center justify-between'>
            <h1>Cadastrar Produto</h1>
            <Link href='/product'>
              <Undo2 />
            </Link>
          </div>
          <div className=' p-8 flex flex-row gap-8 border-y-2 '>
            <FormField
              control={form.control}
              name='file'
              render={({ field }) => (
                <FormItem className='h-[271px] w-[250px] flex items-end justify-center rounded  bg-[#d9d9d9] '>
                  <FormControl>
                    <Button
                      {...field}
                      className=' h-8 w-full flex items-center justify-center gap-2 rounded text-white bg-[#7557E9] '
                    >
                      <Upload />
                      Selecione um arquivo
                    </Button>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className=' container flex flex-col gap-2 '>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center'>
                      <FormLabel className='text-base'>
                        Nome do Produto
                      </FormLabel>
                      <FormMessage className='text-base' />
                    </div>
                    <FormControl>
                      <Input
                        placeholder='Nome do Produto'
                        className=' w-full bg-[#cacaca] dark:bg-black'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='observations'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center'>
                      <FormLabel className='text-base'>Observações</FormLabel>
                      <FormMessage className='text-base' />
                    </div>
                    <FormControl>
                      <Textarea
                        className='h-[85px] w-full bg-[#cacaca] dark:bg-black'
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleTextareaChange(e);
                        }}
                      />
                    </FormControl>
                    <span className=' absolute top-96 right-28 text-base flex justify-end'>
                      {charCount}/100
                    </span>
                  </FormItem>
                )}
              />
              <div className=' grid grid-cols-2'>
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex  items-center'>
                        <FormLabel className='text-base'>Valor</FormLabel>
                        <FormMessage className='text-base' />
                      </div>
                      <FormControl>
                        <Input
                          placeholder='R$'
                          className=' w-full bg-[#cacaca] dark:bg-black'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='amount'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex  items-center'>
                        <FormLabel className='text-base'>Quantidade</FormLabel>
                        <FormMessage className='text-base' />
                      </div>
                      <FormControl>
                        <Input
                          placeholder='00'
                          className=' w-full bg-[#cacaca] dark:bg-black'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-end gap-3 p-8'>
            <Link
              href='/product'
              className='w-24 h-8 flex items-center justify-center rounded text-white bg-[#656565] '
            >
              Voltar
            </Link>
            <Button
              type='submit'
              className='w-24 h-8 rounded text-white bg-[#7557E9] '
            >
              Salvar
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
