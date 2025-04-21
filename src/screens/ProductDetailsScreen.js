import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header'; // importa o Header

const ProductDetailsScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { addToCart } = useContext(CartContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

            <TouchableOpacity
                onPress={() => {
                    addToCart(product);
                    navigation.navigate('Cart');
                }}
                style={styles.cartButton}
            >
                <Text style={styles.cartButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.description}>DESCRIÇÃO DO PRODUTO</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    image: { width: 150, height: 150, marginBottom: 20 },
    name: { fontSize: 18, fontWeight: 'bold' },
    price: { fontSize: 16, color: '#f26a0a', marginBottom: 10 },
    description: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
    cartButton: {
        backgroundColor: '#f26a0a',
        padding: 12,
        borderRadius: 6,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    backButton: {
        backgroundColor: '#0054a6',
        padding: 10,
        borderRadius: 6,
        width: '100%',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default ProductDetailsScreen;
