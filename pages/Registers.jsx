
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
    RefreshControl
} from 'react-native';

import { DATA } from '../DATA/DATA';

import ExpandableComponent from '../components/ExpandableComponent';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Registers = () => {
    const [listDataSource, setListDataSource] = useState(DATA);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        array[index]['isExpanded'] = !array[index]['isExpanded'];
        setListDataSource(array);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {listDataSource.map((item, key) => (
                    <ExpandableComponent
                        key={item.id}
                        onClickFunction={() => {
                            updateLayout(key);
                        }}
                        item={item}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default Registers;

const styles = StyleSheet.create({
    container: {
        flex: 7,
    }
});