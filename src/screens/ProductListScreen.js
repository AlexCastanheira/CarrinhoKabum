import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenHeight = Dimensions.get('window').height;

const ProductListScreen = ({ navigation }) => {
    const { addToCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
            <View style={styles.cardInner}>
                {/* Imagem e nome */}
                <View style={styles.contentRow}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                            {item.name}
                        </Text>
                    </View>
                </View>

                {/* Preço e parcelamento */}
                <View style={styles.priceSection}>
                    <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
                    <Text style={styles.installments}>À vista no PIX</Text>
                    <Text style={styles.installments}>ou 10x de R$ {(item.price / 10).toFixed(2)}</Text>
                </View>

                {/* Botão de comprar */}
                <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
                    <View style={styles.cartBtnContent}>
                        <Icon name="cart" size={16} color="#fff" style={{ marginRight: 6 }} />
                        <Text style={styles.cartText}>Comprar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Header title="Kabum Clone" />

            <View style={styles.topBar}>
                <View style={styles.filter}>
                    <Text style={styles.title}>🔍 Filtros</Text>
                </View>
                <Text style={styles.cartLink}>Mais Procurados</Text>
            </View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 10,
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
        padding: 10,
        elevation: 3,
        justifyContent: 'center',
        height: screenHeight * 0.32,
    },

    cardInner: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'left',
        marginTop: 20,
    },
    priceSection: {
        alignItems: 'center',
        marginTop: 10,
    },
    price: {
        fontSize: 16,
        color: '#f26a0a',
        fontWeight: 'bold',
    },
    installments: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    cartBtn: {
        backgroundColor: '#f26a0a',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    cartBtnContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});

export default ProductListScreen;
