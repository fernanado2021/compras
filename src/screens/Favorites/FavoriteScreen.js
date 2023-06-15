import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/base'
import {screen} from "../../utils/screenName"

const FavoriteScreen = (props) => {
  
  const {navigation} = props;
  
  const goToAddFavorite=()=>{
    navigation.navigate(screen.favorite.addFavorite);
    // navigation.navigate(screen.shoping.tab , {screen: screen.shoping.carshopping}) ///Sirve para ir de un stack a otro estack en otro lugar
  }

  return (
    <View>
      <Text>Screen desde lista de favoritos</Text>
      <Button title={"Crear Producto Favorito"} onPress={goToAddFavorite} />
    </View>
  )
}

export default FavoriteScreen;