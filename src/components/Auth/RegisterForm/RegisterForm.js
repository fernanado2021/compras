import React, {useState} from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { validationSchema} from "./RegisterForm.data"
import { styles } from "./RegisterForm.styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const RegisterForm = () => {
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
      try{
        const auth=getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        Toast.show({
          type: "success",
          position: "top",
          text1: "Registrado Correctamente",
        })
        navigation.navigate(screen.account.account);
      }catch(error){
        // console.log(error);
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error al registrarse",
          text2: "Intentalo de nuevo"
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
      <Input
        placeholder="Confirmar Contraseña"
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
        onChangeText={(text) => formik.setFieldValue("confirmPasswor", text)}
        errorMessage={formik.errors.confirmPasswor}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default RegisterForm;
