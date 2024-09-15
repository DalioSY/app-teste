import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export function TabBar({ state, descriptors, navigation }) {
  const icons = {
    index: (props) => (
      <Feather name='home' size={32} color='white' {...props} />
    ),
    product: (props) => (
      <Feather name='file-text' size={32} color='white' {...props} />
    ),
    box: (props) => (
      <Feather name='archive' size={32} color='white' {...props} />
    ),
    settings: (props) => (
      <Feather name='settings' size={32} color='white' {...props} />
    ),
    menu: (props) => <Feather name='menu' size={32} color='white' {...props} />,
  };

  return (
    <View className=' absolute bottom-0 flex flex-row items-center justify-between gap-10 px-5 py-2 bg-[#f5f5f5] dark:bg-[#232323]'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            className=' flex-1 items-center justify-center  '
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View
              className={`${
                isFocused
                  ? ' absolute bottom-3 h-14 w-14 mb-4 flex items-center justify-center rounded-full bg-[#7652DB] '
                  : ''
              }`}
            >
              {icons[route.name]({
                color: isFocused ? '#fff' : '#828282',
              })}
            </View>

            <Text
              className={`${
                isFocused ? 'dark:text-white mt-8' : 'text-[#828282] '
              }`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
