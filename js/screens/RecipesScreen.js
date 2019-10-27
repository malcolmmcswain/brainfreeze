import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { H2 } from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default function RecipesScreen() {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipesAsync("apple").then((response) => {
      setRecipes(response);
      console.log(response[0]);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {recipes.length == 0 ? <Text>'Loading recipes...'</Text> :
      recipes.map((data, index) => {
        return (
          <View key={index} style={{display: 'flex', flexDirection: 'row', backgroundColor: '#E7E7E7', marginLeft: 25, marginRight: 25, marginTop: 20, padding: 15, borderRadius: 7.5}}>
            <View style={{flex: 3, marginLeft: 25}}>
              <Image source={{uri: data.recipe.image}} style = {{ width: 200, height: 200 }}/>
              <H2 style={{marginTop: 10}}>{data.recipe.label}</H2>
              <Text style={{marginTop: 5}}>Hi</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

async function getRecipesAsync(ingredients) {
  try {
    let response = await fetch(`https://api.edamam.com/search?q="${ingredients}"&app_id="18cb3994"&app_key="b10de6e9e7bed66f19df69b6b010799c"`);
    let responseJson = await response.json();
    return responseJson.hits;
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
