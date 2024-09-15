import '../global.css';
import React from 'react';

import { Tabs } from 'expo-router';
import { TabBar } from '../components/TabBar';

export default function RootLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name='index'
        options={{ title: 'Home', headerShown: false }}
      />
      <Tabs.Screen
        name='product'
        options={{ title: 'Produto', headerShown: false }}
      />
      <Tabs.Screen
        name='box'
        options={{ title: 'Estoque', headerShown: false }}
      />
      <Tabs.Screen
        name='settings'
        options={{ title: 'Config.', headerShown: false }}
      />
      <Tabs.Screen
        name='menu'
        options={{ title: 'Menu', headerShown: false }}
      />
    </Tabs>
  );
}
