//rnf+TAB
import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";


const UserGuestScreen = () => {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/login.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de Carrito de Compras</Text>
      <Text style={styles.description}>
        Buscay compra todos tus productos aqui en nuestro carrito de compras 
        de manera sencilla y rapida y comentanos como fue tu experiencia utilizando 
        la aplicacion y que debemos mejorar
      </Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
