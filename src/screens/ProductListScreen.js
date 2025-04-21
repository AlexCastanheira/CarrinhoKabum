import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import Header from '../components/Header'; // importando o componente de cabeçalho

const ProductListScreen = ({ navigation }) => {
    const { addToCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.detailsBtn}
                    onPress={() => navigation.navigate('ProductDetails', { product: item })}
                >
                    <Text style={styles.detailsText}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cartBtn}
                    onPress={() => addToCart(item)}
                >
                    <Text style={styles.cartText}>+ Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header title="Kabum Clone" />


            <View style={styles.topBar}>
                <Text style={styles.title}>Produtos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.cartLink}>🛒 Carrinho</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0054a6',
    },
    cartLink: {
        color: '#0054a6',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
        flexDirection: 'column', // Garante que os elementos no card ficam empilhados verticalmente
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 8,
        textAlign: 'center',
    },
    price: {
        marginTop: 4,
        fontSize: 14,
        color: '#f26a0a',
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Espalha os botões
        marginTop: 10,
        width: '100%', // Garante que a linha ocupe toda a largura do card
        marginTop: 'auto', // Empurra para o final do card
    },
    detailsBtn: {
        marginRight: 6,
        backgroundColor: '#0054a6',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
    detailsText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    cartBtn: {
        backgroundColor: '#f26a0a',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
    cartText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});



export default ProductListScreen;
