import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import trabalho from './assets/Inferno.jpg'

export default function App() {



  return (
    <View>
{/* 5 */}
      <View>
        {/* Imagem da internet */}
          <Image source={{ uri: 'https://img3.stockfresh.com/files/m/magann/m/56/2544816_stock-photo-jumping.jpg' }} style={{ width: 100, height: 100 }}/>

        {/* Imagem local */}
          <Image source={trabalho} />
      </View>

    </View>
  );

}

