import React, { useState } from "react";
import { View } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../../components/Shared";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "../../components/inputs";

const Login = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [secureEntry, setSecureEntry] = useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const _login = async (data) => {
    // TODO iniciar sesion
  }

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  }

  return (
    <View style={styles.container}>
      {loading === true ? <ActivityLoader /> : null}

      <Image
        style={{ width: 100, height: 100, marginBottom: 20 }}
        source={require("../../../assets/app_icon.png")}
      />

      <Text h3 style={styles.title}>Inicio de sesión</Text>
      <ErrorText error={error} />

      <EmailInput
        name="email"
        control={control}
        errors={errors}
        errorValidationStyle={styles.errorValidation}
        inputStyle={styles.input}
      />

      <PasswordInput 
        name="password"
        control={control}
        errors={errors}
        errorValidationStyle={styles.errorValidation}
        inputStyle={styles.input}
        secureEntry={secureEntry}
        toggleSecureEntry={toggleSecureEntry}
      />

      <Button 
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        title="Acceder"
        type="outline"
        onPress={handleSubmit(_login)}
      />

      <Text 
        onPress={() => navigation.navigate("Signup")}
        style={styles.link}
      >
       No tienes una cuenta?
      </Text>
    </View>
  );
}

export default Login;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$authBg',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  title: {
    fontFamily: '$700Bold',
    color: '$primary',
    fontWeight: '$fontWeight900',
  },
  buttonTitle: {
    fontFamily: '$400Regular',
    color: '$primary',
    fontSize: 22,
  },
  button: {
    borderColor: 'transparent',
  },
  input: {
    fontFamily: '$400Regular',
    color: '$black',
  },
  link: {
    fontFamily: "$400Regular",
    fontSize: '$font12',
    color: '$black',
    textDecorationLine: "underline",
  },
  errorValidation: {
    color: "$red",
    fontSize: "$font12"
  }
});