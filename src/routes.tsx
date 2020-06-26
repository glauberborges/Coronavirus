import * as React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from "./pages/Home/index";
import News from "./pages/News/index";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: '#0088ff',
      background: '#ffffff',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: '#0088ff',
    },
  };

  return (
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator>

            <Tab.Screen name="Noticías" component={News}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="book-open" color={color} size={20} />
                    )
                }}
            />

            <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarIcon: ({color}) => (
                                <Feather name="home" color={color} size={20} />
                            )
                        }}
            />

        </Tab.Navigator>
      </NavigationContainer>
  );
}