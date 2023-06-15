import React, {useState} from "react";
import { View , Text} from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues } from './LoginForm.data';
import { validationSchema } from './LoginForm.data';
import { styles } from "./LoginForm.styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const LoginForm = () => {
  const navigation = useNavigation();
  //hook usestate
  const[showPassword, setShowPassword]=useState(false);
  //hook
  const formik=useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log("Formulario");
      // console.log(formValue);
      try {
        const auth=getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
        navigation.navigate(screen.account.account)
        Toast.show({
          type:"success",
          position:"top",
          text1:"Session Iniciada Correctamente",
        })
      } catch (error) {
        Toast.show({
          type:"error",
          position:"top",
          text1:"Usuario o contraseña incorrecta",
          text2:"Intentelo de nuevo"
        })
      }
    }
  });

  const showHiddenPassword=()=>{
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon 
            type="material-community" 
            name="at" 
            iconStyle={styles.icon} 
          />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ?  "eye-outline" :  "eye-off-outline" }
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar Sesiòn"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnLogin}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}

export default LoginForm;