import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View, H2 } from 'native-base';
import { FoodIcon } from './FoodIcon';

export function FoodCard(props) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#E7E7E7', marginLeft: 25, marginRight: 25, marginTop: 20, padding: 15, borderRadius: 7.5}}>
      <FoodIcon food={props.food} />
      <View style={{flex: 3, marginLeft: 25}}>
        <H2 style={{marginTop: 10}}>{capitalize(props.food)}s</H2>
        <Text style={{marginTop: 5}}>You currently have {props.number} {props.food}(s).</Text>
      </View>
    </View>
  );
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
