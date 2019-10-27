import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { H1, H2, Card, CardItem, Body } from 'native-base';
import { MonoText } from '../components/StyledText';
import { FoodCard } from '../components/FoodCard';

import * as firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const itemsRef = firebaseApp.database().ref("items");

export default function HomeScreen() {

  const [apples, setApples] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [carrots, setCarrots] = useState(0);
  const [oranges, setOranges] = useState(0);
  const [broccoli, setBroccoli] = useState(0);

  useEffect(() => {
    itemsRef.on("value", function(snap) {
      setApples(snap.val().apples.number);
      setBananas(snap.val().bananas.number);
      setCarrots(snap.val().carrots.number);
      setBroccoli(snap.val().broccoli.number);
      setOranges(snap.val().oranges.number);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={{ alignItems: 'center' }}>
          <H1 style={{ fontWeight: 'bold' }}>Your Fridge</H1>
        </View>

        <View>
          <FoodCard food="apple" number={apples} />
          <FoodCard food="banana" number={bananas} />
          <FoodCard food="broccoli" number={broccoli} />
          <FoodCard food="carrot" number={carrots} />
          <FoodCard food="orange" number={oranges} />
        </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
