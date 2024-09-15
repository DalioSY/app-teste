import { Text, View } from 'react-native';
import { Header } from '../components/Header';

export default function Box() {
  return (
    <View className='h-screen bg-[#f5f5f5] dark:bg-black'>
      <Header title='Estoque' icon='archive' />
      <View className=' size-full flex-col items-center justify-center  '>
        <Text className='dark:text-white text-6xl'>Estoque</Text>
      </View>
    </View>
  );
}
