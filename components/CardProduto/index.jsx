import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useContext, useState } from 'react';
import { PedidoContext } from '../../context/PedidoContext';

export default function CardProduto({ produto }) {
    const [quantidade, setQuantidade] = useState(0)
    const { addProduto, removeProduto } = useContext(PedidoContext)

    const handlePlus = () => { 
        setQuantidade(quantidade + 1)
        addProduto(produto)
    }

    const handleMinus = () => {
        if (quantidade === 0) return
        setQuantidade(quantidade - 1)
        removeProduto(produto)
    } 
    
    
    return (
        <View style={styles.pedidos}>

            <View style={styles.cardProduto}>
                <Image style={styles.thumb} source={{ uri: produto.imagePath }} />

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity onPress={handleMinus}>
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>
                        {quantidade}
                    </Text>
                    <TouchableOpacity onPress={handlePlus}>
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}