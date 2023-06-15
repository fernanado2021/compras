import React from 'react'
import { View, Text, Image} from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./UserLoggedScreen.styles";

const UserLoggedScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/avatar.png")}
        style={styles.image}
      />
      <Text style={styles.text1}>Bienvenido</Text>
      <Text style={styles.text2}>Estamos seguros que disfrutaras esta APP</Text>
  </KeyboardAwareScrollView>
  )
}

export default UserLoggedScreen;