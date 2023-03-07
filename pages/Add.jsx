
import React, { useState } from 'react';

import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
    TextInput,
    Button,
} from 'react-native';

// isExpanded: false,
// id: '1',
// dateTime: new Date(),
// pricePerLiter: '1,10',
// liters: '10,00',
// totalCost: '110,00',
// km: '1111

import { DATA, listCreate } from '../DATA/DATA';

import { storeData, getData } from '../DATA/asyncDATA';

const Add = () => {
    const [pricePerLiter, setPricePerLiter] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [km, setKm] = useState("");

    const addNewTexto = () => {
        listCreate('Salvar Teste');
    };

    const escrever = () => {
        storeData('hehe');
    };

    const ler = () => {
        getData();
    };

    return (
        <View>
            <TextInput
                placeholder='Preço do litro'
                keyboardType='decimal-pad'
                value={pricePerLiter}
                onChangeText={setPricePerLiter}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder='Valor pago'
                keyboardType='decimal-pad'
                value={totalCost}
                onChangeText={setTotalCost}
                style={{ marginHorizontal: 8 }}
            />
            <TextInput
                placeholder='Quilometragem'
                keyboardType='decimal-pad'
                value={km}
                onChangeText={setKm}
                style={{ marginHorizontal: 8 }}
            />

            <Button title='Salvar' onPress={addNewTexto} />
            <Button title='ESCREVER' onPress={escrever} />
            <Button title='LER' onPress={ler} />
        </View>
    );
};

export default Add;

const styles = StyleSheet.create({

});