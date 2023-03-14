
import React, { useState } from 'react';

import { DATA } from '../DATA/DATA';

import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
} from 'react-native';

const Overview = () => {

    const waitF = () => {

    };



    return (
        <View>
            <Text>Média de consumo: {waitF()}</Text>
            <Text>Penúltimo consumo: {waitF()}</Text>
            <Text>Comparação de consumo: {waitF()}</Text>
            <Text>----------------</Text>
            <Text>Média de Km's rodados: {waitF()}</Text>
            <Text>Comparação de Km's: {waitF()}</Text>
            <Text>------------------</Text>
            <Text>Dias do último abastecimento: {waitF()}</Text>
            <Text>Km1s do último abastecimento: {waitF()}</Text>

        </View>
    );
};

export default Overview;

const styles = StyleSheet.create({

});