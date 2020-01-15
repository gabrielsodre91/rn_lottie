import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

import animacao from './animation-dashboard.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Exemplo de aplicação React Native usando animações com Lottie</Text>
      <Lottie style={styles.animacao} autosize source={animacao} resizeMode="contain" autoPlay loop></Lottie>
      <Text style={styles.rodape}>Desenvolvido por Gabriel Sodré (github: gabrielsodre91)</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  header: {
    margin: 20,
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'center',
    fontSize: 18
  },
  rodape: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    fontSize: 18
  },
  animacao: {
    flex: 5
  }
});