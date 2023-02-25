

// Import React
import React, { useState } from 'react';
// Import required components
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

import ExpandableComponent from '../components/ExpandableComponent';
import CONTENT from '../DATA/DATA';

const Registers = () => {
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            // If multiple select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            // If single select is enabled
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
                    : (array[placeindex]['isExpanded'] = false)
            );
        }
        setListDataSource(array);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={styles.titleText}>Registros</Text>
                <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
                    <Text
                        style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                        }}>
                        {multiSelect
                            ? 'Desabilitar múltipla \n seleção'
                            : 'Habilitar múltipla \n seleção'}
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
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
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
    }
});