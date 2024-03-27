import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './style.js'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.js'

export default function Login({ navigation }) {
    const [ error , setError] = useState("")
    const [ email , setEmail] = useState("joao@gmail.com")
    const [ senha , setSenha] = useState("123")

    const { login } = useContext(AuthContext)
    
    function handleLogin(){
        if (login(email, senha) === "ok"){
            navigation.navigate('Comanda')
        }else{
            setError("acesso negado")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/home.png')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <Input placeholder="email" value={email} onChangeText={setEmail} />
            <Input placeholder='senha' value={senha} onChangeText={setSenha} secureTextEntry />
            <Button onPress={handleLogin} >entrar</Button>
            <Text>{error}</Text>
           
            <StatusBar style="auto" />
        </View>
    )
}

