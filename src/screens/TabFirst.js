import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const TabFirst = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: 'pink',
    padding: 20,
    marginTop: 30,
    margin: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TabFirst;
