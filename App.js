import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginPressed = () => {
    console.log(email, password);
    Alert.alert("Login Successful");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.circleImage}
        source={require("./assets/ironman.jpg")}
      />
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your passeord"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          style={styles.submitButton}
          onPress={onLoginPressed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "space-around",
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputText: {
    width: 300,
    height: 38,
    borderWidth: 1,
    marginBottom: 17,
    borderRadius: 15,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  submitButton: {
    width: 100,
    height: 50,
    borderRadius: 50,
  },
});
