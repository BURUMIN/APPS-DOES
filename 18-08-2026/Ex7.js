import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

export default function App() {
    // 7
    const [nome, setNome] = useState('');
    // 4
    const styles = StyleSheet.create({
      titulo: { fontSize: 22, color: '#0add2e' },
    });


  return (
    <View>



{/* 7 */}
      <View>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />
      </View>

    </View>
  );

}

