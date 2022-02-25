import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import styles from "../../styles/auth";
import { ErrorText, ActivityLoader } from "../../components/Shared";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput, TextInput } from "../../components/inputs";

const Signup = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureConfirmationEntry, setSecureConfirmationEntry] = useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const _signup = async () => {
    // TODO registrar usuarios
  }

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry)
  }

  const togglesecureConfirmationEntry = () => {
    setSecureConfirmationEntry(!secureConfirmationEntry)
  }

  return (
    <View style={styles.container}>
      {loading === true ? <ActivityLoader /> : null}
      <Image
        style={{ width: 100, height: 100, marginBottom: 20 }}
        source={require("../../../assets/app_icon.png")}
      />

      <Text h2 styles={styles.title}>Registro</Text>
      <ErrorText error={error} />

      <TextInput
        name="name"
        minLength={2}
        maxLength={30}
        iconName="person-outline"
        control={control}
        errors={errors}
        errorValidationStyle={styles.errorValidation}
        inputStyle={styles.input}
      />

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

      <PasswordInput 
        name="passwordConfirmation"
        control={control}
        errors={errors}
        errorValidationStyle={styles.errorValidation}
        inputStyle={styles.input}
        secureEntry={secureConfirmationEntry}
        toggleSecureEntry={togglesecureConfirmationEntry}
      />

      <Button 
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        title="Crear cuerta"
        type="outline"
        onPress={handleSubmit(_signup)}
      />

      <Text 
        onPress={() => navigation.navigate("Login")}
        style={styles.link}
      >
        Ya tienes una cuenta?
      </Text>
    </View>
  );
}

export default Signup;
