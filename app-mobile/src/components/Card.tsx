import Feather from '@expo/vector-icons/Feather';
import { Image, Text, View } from 'react-native';

export function Card() {
  return (
    <View className='m-5 rounded-xl dark:bg-[#232323] '>
      <View className='m-2 flex flex-row'>
        <Image
          className='h-[67px] w-[67px] rounded-md '
          source={require('../../assets/images/bolo.png')}
        ></Image>
        <View className='mx-1'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='dark:text-white font-semibold'>
              Bolo de Chocolate
            </Text>
            <Text className='dark:text-white text-xs'>
              Data de Cadastro: 20/09/2024
            </Text>
          </View>
          <Text className=' max-h-[30px] max-w-[265px] text-xs dark:text-white'>
            Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quos non eligendi ea velit minus dignissimos molestias dolor quia
            nesciunt ut doloribus, veniam tempore illum officiis ipsa odio
            aliquam alias minima.
          </Text>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xs dark:text-white'>Valor: R$ 24,99</Text>
            <Text className='text-xs dark:text-white'>
              Quantidade: 20 Unid.
            </Text>
          </View>
        </View>
        <Feather className='dark:text-white' name='more-vertical' size={24} />
      </View>
    </View>
  );
}
