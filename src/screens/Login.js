import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Home')} title="go to home?" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
