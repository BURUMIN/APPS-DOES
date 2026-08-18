import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

export default function App() {


  return (
    <View>
{/* 3 */}
      <View>
        <Text>Texto no app</Text>
        <Image source={trabalho} />
      </View>

    </View>
  );

}

