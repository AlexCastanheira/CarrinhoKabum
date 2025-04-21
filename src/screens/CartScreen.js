// src/screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart, changeQuantity, clearCart } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        Alert.alert("Compra finalizada!", "Obrigado por comprar conosco.");
        clearCart();
        navigation.navigate('ProductList');
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
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
                <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
                    <Text style={styles.removeText}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                    <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
                        <Text style={styles.checkoutText}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('ProductList')} style={styles.backBtn}>
                <Text style={styles.backText}>← Continuar Comprando</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    item: { flexDirection: 'row', marginBottom: 16, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10 },
    image: { width: 60, height: 60, marginRight: 10 },
    info: { flex: 1 },
    name: { fontSize: 14, fontWeight: 'bold' },
    price: { fontSize: 14, color: '#f26a0a', marginVertical: 4 },
    quantityRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
    qtyBtn: { backgroundColor: '#eee', padding: 6, borderRadius: 4 },
    qtyText: { fontSize: 16, fontWeight: 'bold' },
    qtyNumber: { marginHorizontal: 10, fontSize: 14 },
    removeBtn: { marginTop: 6 },
    removeText: { color: '#d00', fontSize: 12 },
    total: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginVertical: 10 },
    checkoutBtn: { backgroundColor: '#0054a6', padding: 12, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
    checkoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    backBtn: { alignItems: 'center', marginTop: 10 },
    backText: { color: '#0054a6', fontSize: 14 },
    emptyText: { textAlign: 'center', marginTop: 30, fontSize: 16 },
});

export default CartScreen;
