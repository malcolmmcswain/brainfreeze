import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';

export function AppHeader(props) {
  return (
    <Header>
      <Left/>
      <Body>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
              width: 200,
              height: 80,
              resizeMode: 'contain',
          }}
        />
      </Body>
      <Right />
    </Header>
  );
}
