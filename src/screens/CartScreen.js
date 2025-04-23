// src/screens/CartScreen.js
import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    TextInput
} from 'react-native';
import { CartContext } from '../context/CartContext';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart, changeQuantity, clearCart } = useContext(CartContext);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        Alert.alert("Compra finalizada!", "Obrigado por comprar conosco.");
        clearCart();
        navigation.navigate('ProductList');
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity style={styles.removeIcon} onPress={() => removeFromCart(item.id)}>
                <MaterialIcons name="delete" size={20} color="#d00" />
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.priceInfo}>
                <Text style={styles.installments}>Parcelado em 10x de R$ {(item.price / 10).toFixed(2)}</Text>
                <Text style={styles.pixLabel}>Preço à vista no PIX:</Text>
            </View>

            <View style={styles.cardBottomRow}>
                <Text style={styles.price}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
                <View style={styles.quantityRow}>
                    <TouchableOpacity onPress={() => changeQuantity(item.id, -1)} style={styles.qtyBtn}>
                        <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyNumber}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => changeQuantity(item.id, 1)} style={styles.qtyBtn}>
                        <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            {/* Header personalizado */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Carrinho</Text>
            </View>

            {/* Localização */}
            <View style={styles.locationSection}>
                <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={20} color="#f26a0a" />
                    <Text style={styles.locationText}>Entrega</Text>
                </View>
                <Text style={styles.addressLabel}>Selecione seu endereço:</Text>
                <View style={styles.cepInputRow}>
                    <TextInput placeholder="Digite seu CEP" style={styles.cepInput} keyboardType="numeric" />
                    <TouchableOpacity style={styles.okButton}>
                        <Text style={styles.okButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.forgetCep}>Não lembro meu CEP</Text>
            </View>

            {/* Lista de produtos */}
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />
                    <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
                        <Text style={styles.checkoutText}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* Botão para continuar comprando */}
            <TouchableOpacity onPress={() => navigation.navigate('ProductList')} style={styles.backBtn}>
                <Text style={styles.backText}>← Continuar Comprando</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0054a6',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    locationSection: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    locationText: {
        fontSize: 16,
        marginLeft: 6,
    },
    addressLabel: {
        fontSize: 14,
        marginBottom: 6,
    },
    cepInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cepInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        flex: 1,
    },
    okButton: {
        marginLeft: 10,
        backgroundColor: '#f26a0a',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    okButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    forgetCep: {
        color: '#f26a0a',
        fontSize: 13,
        marginTop: 6,
    },
    card: {
        margin: 16,
        backgroundColor: '#f9f9f9',
        padding: 14,
        borderRadius: 10,
        elevation: 2,
        position: 'relative',
    },
    removeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 6,
    },
    cardBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        color: '#f26a0a',
    },
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyBtn: {
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    qtyText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    qtyNumber: {
        marginHorizontal: 10,
        fontSize: 14,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 16,
        marginTop: 10,
    },
    checkoutBtn: {
        backgroundColor: '#0054a6',
        padding: 14,
        margin: 16,
        borderRadius: 6,
        alignItems: 'center',
    },
    checkoutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backBtn: {
        alignItems: 'center',
        marginBottom: 16,
    },
    backText: {
        color: '#0054a6',
        fontSize: 14,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16,
    },
    priceInfo: {
        marginTop: 6,
        marginBottom: 4,
    },
    installments: {
        fontSize: 13,
        color: '#444',
        textAlign: 'left',
    },
    pixLabel: {
        fontSize: 13,
        color: '#444',
        textAlign: 'left',
        fontWeight: '500',
    },

});

export default CartScreen;
