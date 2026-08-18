import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

export default function App() {

    // 4
    const styles = StyleSheet.create({
      titulo: { fontSize: 22, color: '#0add2e' },
    });


  return (
    <View>
{/* 4 */}
      <View>
        <Text style={styles.titulo}>Título</Text>
      </View>

    </View>
  );

}

