// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  const dateTime = `${item.dateTime.getDay()} / ${item.dateTime.getMonth() + 1}/ ${item.dateTime.getFullYear()}`;

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>{item.id}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        <Text>Data: {dateTime}</Text>
        <Text>Preço por litro: R$ {item.pricePerLiter}</Text>
        <Text>Litros: {item.liters} L</Text>
        <Text>Preço total: R$ {item.totalCost}</Text>
        <Text>Quilometragem: {item.km} km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

export default ExpandableComponent;