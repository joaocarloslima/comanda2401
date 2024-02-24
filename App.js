import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';

import { MaterialIcons } from '@expo/vector-icons';
import Comanda from './app/Comanda';
import Produtos from './app/Produtos';


export default function App() {
  return <Produtos />
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/home.png')} />
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      <Input placeholder="email" />
      <Input placeholder='senha' secureTextEntry />
      <Button>entrar</Button>
      <MaterialIcons name="exit-to-app" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '121A2C',
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 200,
  }
  

});


