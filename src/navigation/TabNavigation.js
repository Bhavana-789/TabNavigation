import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabFirst from '../screens/TabFirst';
import TabSecond from '../screens/TabSecond';
import TabThird from '../screens/TabThird';
import TabFourth from '../screens/TabFourth';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={TabFirst} />
      <BottomTab.Screen name="Tab2" component={TabSecond} />
      <BottomTab.Screen name="Tab3" component={TabThird} />
      <BottomTab.Screen name="Tab4" component={TabFourth} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
