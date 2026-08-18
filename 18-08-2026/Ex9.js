import { useState, props } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

function Saudacao({ nome }) {
    
  return (
    <View>
{/* 9 */}
      <View>
        <Text>Olá, {nome}!</Text>;
      </View>
    </View>
  );

}

export default function App() {
  return (
    <View>
      <Saudacao nome="Ana" />
      <Saudacao nome="Beto" />
    </View>
  );
}