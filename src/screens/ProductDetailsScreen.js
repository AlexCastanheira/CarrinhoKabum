import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons'; // ou Feather/MaterialIcons

const ProductDetailsScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { addToCart } = useContext(CartContext);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Topo personalizado */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.headerText}>Detalhes do Produto</Text>

                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="search" size={22} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Icon name="cart" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.name}>{product.name}</Text>

                <Image source={product.image} style={styles.image} />

                <View style={styles.priceSection}>
                    <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                    <Text style={styles.installments}>
                        ou 10x de R$ {(product.price / 10).toFixed(2)}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        addToCart(product);
                        navigation.navigate('Cart');
                    }}
                    style={styles.cartButton}
                >
                    <View style={styles.cartBtnContent}>
                        <Icon name="cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                        <Text style={styles.cartButtonText}>Comprar</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.descriptionTitle}>Descrição do Produto</Text>
                <Text style={styles.description}>{product.description}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0054a6',
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 12,
    },
    backButton: {
        zIndex: 1,
    },


    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    priceSection: {
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    price: {
        fontSize: 22,
        color: '#f26a0a',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    installments: {
        fontSize: 14,
        color: '#333',
    },
    cartButton: {
        backgroundColor: '#f26a0a',
        padding: 12,
        borderRadius: 6,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    cartBtnContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#444',
        textAlign: 'justify',
    },
});

export default ProductDetailsScreen;
