import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import { CartProvider } from './src/context/CartContext';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ProductList">
                    <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Produtos' }} />
                    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Detalhes do Produto' }} />
                    <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrinho' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
