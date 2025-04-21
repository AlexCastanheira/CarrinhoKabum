import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../assets/logo.jpeg';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0054a6',
        height: 150, // defina uma altura fixa
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // garante que a imagem não ultrapasse os limites
    },
    logo: {
        width: '100%',
        height: '120%',
        resizeMode: 'cover', // cobre toda a área do header
    },

});

export default Header;
