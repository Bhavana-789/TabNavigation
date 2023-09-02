import React from 'react';
import Home from '../screens/Home';
import DrawerFirst from '../screens/DrawerFirst';
import DrawerSecond from '../screens/DrawerSecond';
import DrawerThird from '../screens/DrawerThird';
import CustomDrawer from '../components/CustomDrawer';
const {createDrawerNavigator} = require('@react-navigation/drawer');

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="D1" component={DrawerFirst} />
      <Drawer.Screen name="D2" component={DrawerSecond} />
      <Drawer.Screen name="D3" component={DrawerThird} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
