import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, StyleSheet, Text} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
