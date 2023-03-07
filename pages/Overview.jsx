
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

    const data = [...DATA];

    const thisMonth = data[0];
    const lastMonth = data[1];
    const lastLastMonth = data[2];

    lastMonth.dateTime.setDate(10);
    lastMonth.dateTime.setMonth(3);
    lastMonth.dateTime.setFullYear(2024);
    lastLastMonth.dateTime.setDate(20);
    lastLastMonth.dateTime.setMonth(3);
    lastLastMonth.dateTime.setFullYear(2024);

    const consume = () => {
        const kmMedia = parseInt(thisMonth.km) - parseInt(lastMonth.km);
        const res = kmMedia / parseInt(lastMonth.liters);
        return (res);
    };
    const consumeComparation = () => {
        const kmMedia = parseInt(lastMonth.km) - parseInt(lastLastMonth.km);
        const res = consume() - (kmMedia / parseInt(lastLastMonth.liters));
        return (res);
    };

    const kms = () => {
        const res = parseInt(thisMonth.km) - parseInt(lastMonth.km);
        return (res);
    };
    const kmsComparation = () => {
        const res = kms() - (parseInt(lastMonth.km) - parseInt(lastLastMonth.km));
        return (res);
    };

    const chargeDay = () => {
        const res = thisMonth.dateTime - lastMonth.dateTime;
        return (Math.abs((res) / (1000 * 3600 * 24)));
    };
    const chargeDayComparation = () => {
        const res = lastMonth.dateTime - lastLastMonth.dateTime;
        return (chargeDay() - Math.abs((res) / (1000 * 3600 * 24)));
    };

    return (
        <View>
            <Text>Média de consumo: {consume()}</Text>
            <Text>Comparação de consumo: {consumeComparation()}</Text>
            <Text>----------------</Text>
            <Text>Média de km rodado: {kms()}</Text>
            <Text>Comparação de Km: {kmsComparation()}</Text>
            <Text>------------------</Text>
            <Text>Dias do último abastecimento: {chargeDay()}</Text>
            <Text>Comparativo de dias do último abastecimento: {chargeDayComparation()}</Text>

        </View>
    );
};

export default Overview;

const styles = StyleSheet.create({

});