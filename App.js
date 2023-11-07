import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Form from './Components/Form';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/98344/files/2020/11/New_Binary_Image-768x343.png' }}
        />
        <Text style={styles.titulo}>Funções e Portas Lógicas</Text>
        <Form />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  titulo: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

});
