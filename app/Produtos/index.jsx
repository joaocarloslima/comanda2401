import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './style.js';
import CardProduto from '../../components/CardProduto/index.jsx';
import Button from '../../components/Button/index.jsx';

const produto = {
    "id": 1,
    "nome": "Bolo de Chocolate",
    "imagePath": "https://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527565.jpg?t=st=1688655003~exp=1688658603~hmac=84829cbb20876216de8d7e408378e6b1c44686855c3d414865b445e20bb5f7b4&w=1380",
    "preco": 8
}

export default function Produtos() {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="black" />

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />
                <CardProduto produto={produto} />

            </ScrollView>


            <Button>
                Finalizar
            </Button>
        </View>

    )
}