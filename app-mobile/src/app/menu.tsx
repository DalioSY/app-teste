import { Text, View } from 'react-native';
import { Header } from '../components/Header';

export default function Menu() {
  return (
    <View className=' h-screen bg-[#f5f5f5] dark:bg-black'>
      <Header title='Menu' icon='menu' />
      <View className=' size-full flex flex-col items-center justify-center  '>
        <Text className='dark:text-white text-6xl'>Menu</Text>
      </View>
    </View>
  );
}
