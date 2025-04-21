import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen name="Products" component={ProductListScreen} options={{ title: 'Produtos' }} />
                <Stack.Screen name="ProductDetails" component={ProductDetailScreen} options={{ title: 'Detalhes do Produto' }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrinho' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
