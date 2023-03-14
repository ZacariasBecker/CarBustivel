
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


import { DATA, listCreate } from '../DATA/DATA';

import { storeData, getData, removeData, getAllKeys, clearAll, getAllData } from '../DATA/asyncDATA';

const Add = () => {
    const [pricePerLiter, setPricePerLiter] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [km, setKm] = useState("");
    const [liters, setLiters] = useState("");

    const addNewTexto = () => {
        listCreate('Salvar Teste');
    };

    const escrever = async () => {
        const dateTime = new Date();
        setLiters(totalCost / pricePerLiter);

        await storeData({
            isExpanded: false,
            id: '777',
            dateTime: dateTime,
            pricePerLiter: pricePerLiter,
            liters: liters,
            totalCost: totalCost,
            km: km
        });
    };

    const ler = async () => {
        const hehe = await getData();
        alert(hehe.totalCost);
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
            <Text>--------</Text>
            <Button title='ESCREVER' onPress={escrever} />
            <Button title='LER' onPress={ler} />
            <Text>--------</Text>
            <Button title='Todas as chaves' onPress={getAllKeys} />
            <Text>--------</Text>
            <Button title='Remove values' onPress={removeData} />
            <Text>--------</Text>
            <Button title='Clear all' onPress={clearAll} />
            <Text>--------</Text>
            <Button title='get all data' onPress={getAllData} />
        </View>
    );
};

export default Add;

const styles = StyleSheet.create({

});