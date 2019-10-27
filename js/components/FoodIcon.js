import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header, Left, Body, Right } from 'native-base';

export function FoodIcon(props) {
  switch(props.food) {
    case "apple":
      return (<Image
          source={require("../assets/images/apple-icon.png")}
          style={{width: 75, height: 75, flex: 1}}
        />
      );
      break;
    case "banana":
      return (<Image
          source={require("../assets/images/banana-icon.png")}
          style={{width: 75, height: 75, flex: 1}}
        />
      );
      break;
    case "carrot":
      return (<Image
          source={require("../assets/images/carrot-icon.png")}
          style={{width: 75, height: 75, flex: 1}}
        />
      );
      break;
    case "broccoli":
      return (<Image
          source={require("../assets/images/broccoli-icon.png")}
          style={{width: 75, height: 75, flex: 1}}
        />
      );
      break;
    case "orange":
      return (<Image
          source={require("../assets/images/orange-icon.png")}
          style={{width: 75, height: 75, flex: 1}}
        />
      );
      break;
  }
}
