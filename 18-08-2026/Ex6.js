import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

export default function App() {



  return (
    <View>
{/* 6 */}
      <View>
        <Button title="Clique" onPress={() => alert('Oi!')} />
        <TouchableOpacity onPress={() => alert('Toque!')}>
          <Text>Botão personalizado</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}

