import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function RegistrationScreen() {
  const [isReady, setIsReady] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const register = () => {
    Keyboard.dismiss();
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground
              source={require("../assets/img/bg.jpg")}
              style={styles.bg}
            >
              <View style={styles.photoContainer}>
                <View style={styles.photo}>
                  <TouchableOpacity style={styles.photoBtn}>
                    <Image
                      source={require("../assets/img/plus.png")}
                      style={styles.photoBtnImg}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.form}>
                <Text style={styles.title}>Registration</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    value={login}
                    onChangeText={loginHandler}
                    placeholder="Login"
                    style={styles.input}
                  />
                  <TextInput
                    value={email}
                    onChangeText={emailHandler}
                    placeholder="E-mail"
                    style={styles.input}
                  />
                  <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  <TouchableOpacity style={styles.showBtn}>
                    <Text style={styles.link}>Show</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} onPress={register}>
                  <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.link}>
                  Already have an account? Sign in
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const inputHeight = 50;
const gap = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  photoContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: -60,
    zIndex: 2,
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  photoBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,

    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",
  },
  photoBtnImg: {},
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",

    marginBottom: 33,
  },
  form: {
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputContainer: {
    position: "relative",

    flexBasis: inputHeight * 3 + gap * 2,
    justifyContent: "space-between",

    marginBottom: 43,
  },
  input: {
    padding: 16,

    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  showBtn: {
    position: "absolute",
    bottom: 15,
    right: 16,
  },
  btn: {
    height: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,

    marginBottom: 16,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },
});
