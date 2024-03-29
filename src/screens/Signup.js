import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Signup Page</Text>
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Need an account?"
      />
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

export default Signup;
