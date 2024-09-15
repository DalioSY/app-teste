import { View } from 'react-native';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import Feather from '@expo/vector-icons/Feather';

export default function Product() {
  return (
    <View className=' h-screen bg-[#f5f5f5] dark:bg-black'>
      <Header title='Produto' icon='file-text' />
      <View className=' absolute top-28 right-5 dark:text-white'>
        <Feather name='plus-square' size={30} color='white' />
      </View>
      <Card />
    </View>
  );
}
