import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@storage_Key1', jsonValue);
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

const removeData = async () => {
    try {
        await AsyncStorage.removeItem('@storage_Key');
    } catch (e) {
        // remove error
    }
};


const getAllKeys = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys();
        return keys;
    } catch (e) {
        // read key error
    }
};

const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // clear error
    }
};

const getAllData = async () => {
    try {
        const allData = await getAllKeys();
        const values = await AsyncStorage.multiGet(allData);
        let filteredValues = [];
        values.forEach(e =>
            filteredValues.push(e[1])
        );
        return filteredValues;
    } catch (e) {

    }
};

export { storeData, getData, getAllKeys, clearAll, removeData, getAllData };



