import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style.js"
import Input from '../../components/Input';
import Button from '../../components/Button/index.jsx';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { PedidoContext } from '../../context/PedidoContext.js';

export default function Comanda({navigation}) {
    const { user, logout } = useContext(AuthContext)
    const [ comanda , setComanda ] = useState('')
    const { loadComanda } = useContext(PedidoContext)

    function handleLogout(){
        logout()
        navigation.navigate("Login")
    }

    async function handleConfirm(){
        console.log(comanda)
        const resp = await fetch('http://localhost:3000/comandas?id=' + comanda)
        const data = await resp.json()
        const dadoscomanda = data[0]
        loadComanda(dadoscomanda)
        navigation.navigate("Produtos")
    }

    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>
                        { user.nome }
                    </Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="exit-to-app" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <Input placeholder="Comanda" value={comanda} onChangeText={setComanda} />
                <Button onPress={handleConfirm} >confirmar</Button>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}