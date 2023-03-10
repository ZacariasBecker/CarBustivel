
import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MenuBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuBar}>
            <TouchableOpacity style={styles.menuButtonContainer}
                onPress={() => navigation.navigate('Resumo')}
            >
                <Icon name="leaf" size={25} color="#000" />
                <Text>Resumo</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.menuButtonContainer}
                onPress={() => navigation.navigate('Registros')}
            >
                <Icon name="home" size={25} color="#000" />
                <Text>Registros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonContainer}
                onPress={() => navigation.navigate('Adicionar')}
            >
                <Icon name="plus" size={25} color="#000" />
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuBar;

const styles = StyleSheet.create({
    menuBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    menuButtonContainer: {
        display: 'flex',
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E74CA',
    }
});

