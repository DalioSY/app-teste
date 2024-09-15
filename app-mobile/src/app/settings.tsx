import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Header } from '../components/Header';

export default function Settings() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const handleThemeChange = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  };

  return (
    <View className='h-screen bg-[#f5f5f5] dark:bg-black'>
      <Header title='Configurações' icon='settings' />
      <View className='flex flex-row items-center justify-between rounded-xl m-5 p-3 bg-white dark:bg-[#232323]'>
        <Text className='dark:text-white'>Trocar tema</Text>
        <TouchableOpacity onPress={handleThemeChange}>
          <Image
            className='-mb-2'
            source={
              colorScheme === 'light'
                ? require('../../assets/images/light-icon.png')
                : require('../../assets/images/dark-icon.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
