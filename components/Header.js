import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const  Header = (props) => {
  console.log(props)
  return (
    <View style={styles.header}>
        <Text style={styles.text}>
            {props.title}
        </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    padding: 15,
    backgroundColor: 'blue'
  },
  text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
  },
});

export default Header
