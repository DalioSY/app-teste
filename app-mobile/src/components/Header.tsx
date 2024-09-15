import Feather from '@expo/vector-icons/Feather';
import { Text, View } from 'react-native';

type Header = {
  title: string;
  icon: string | any;
};

export function Header({ title, icon }: Header) {
  return (
    <View className='flex h-[137px] flex-row items-end gap-5 bg-[#7652DB] rounded-b-3xl p-5'>
      <Feather name={icon} size={30} color='white' />
      <Text className='text-white text-3xl'>{title} </Text>
    </View>
  );
}
