import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
        // saving error
        alert("Erro escrever");
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
            // value previously stored
            alert(value);
        }
    } catch (e) {
        // error reading value
        alert("Erro ler");
    }
};

export { storeData, getData };