import {
  ImageBackground,
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

const initFocus = { email: false, password: false};

export default function LoginScreen() {
  const [isReady, setIsReady] = useState(false);
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hasFocus, setHasFocus] = useState(initFocus);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const login = () => {
    Keyboard.dismiss();
    console.log(`email: ${email}, password: ${password}`);
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

  const onInputFocus = (text) => {
    setFocus(true);
    setHasFocus(arr => ({ ...arr, [text]: true }));
  };

  const onInputBlur = (text) => {
    setHasFocus(arr => ({ ...arr, [text]: false }));
  };

  const removeFocus = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={removeFocus}>
          <View style={styles.container}>
            <ImageBackground
              source={require("../assets/img/bg.jpg")}
              style={styles.bg}
            >
              <View style={[styles.form, {paddingBottom: focus ? 0 : 145}]}>
                <Text style={styles.title}>Login</Text>

                <View style={[styles.inputContainer, { marginBottom: focus ? 32 : 43 }]}>
                  <TextInput
                    value={email}
                    onChangeText={emailHandler}
                    placeholder="E-mail"
                    style={[styles.input, hasFocus.email && styles.inputFocus]}
                    onFocus={() => onInputFocus('email')}
                    onBlur={() => onInputBlur('email')}
                  />
                  <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={[styles.input, hasFocus.password && styles.inputFocus]}
                    onFocus={() => onInputFocus('password')}
                    onBlur={() => onInputBlur('password')}
                  />
                  <TouchableOpacity style={styles.showBtn}>
                    <Text style={styles.link}>Show</Text>
                  </TouchableOpacity>
                </View>
                {!focus &&
                  (<View>
                  <TouchableOpacity style={styles.btn} onPress={login}>
                    <Text style={styles.btnText}>Sign in</Text>
                  </TouchableOpacity>
                  <Text style={styles.link}>
                    Do not have an account? Sign up
                  </Text>
                </View> )
                }
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
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",

    marginBottom: 33,
  },
  form: {
    paddingTop: 32,
    paddingHorizontal: 16,

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputContainer: {
    position: "relative",

    flexBasis: inputHeight * 2 + gap,
    justifyContent: "space-between",
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
  inputFocus: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
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
