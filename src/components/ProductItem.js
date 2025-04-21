import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        padding: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 5,
        color: '#888',
    },
});

export default ProductItem;
