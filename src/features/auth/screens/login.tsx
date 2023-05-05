import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { loginInterface } from "../helpers/authInterface";
import { useAuthStore } from "../store/auth";
import { loginValidationSchema } from "../helpers/validationSchema";

export default function Login({ navigation } : any ) {
  const screenHeight = Dimensions.get("window").height;
  const { login } = useAuthStore(state => state);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        // keyboardShouldPersistTaps="handled"
      >
        {/* <View > */}
        <View style={styles.loginView}>
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "500" }}
          >
            Login
          </Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Formik
              initialValues={{ uid: "", password: "" }}
              onSubmit={async (values: loginInterface, actions) => {
                actions.setSubmitting(true);
                await login(values)
                actions.setSubmitting(false);
              }
              }
              validationSchema={loginValidationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting
              }) => (
                <>
                  <TextInput
                    label="Email/Username"
                    style={{
                      backgroundColor: "",
                      marginBottom: 10,
                      height: 50,
                    }}
                    left={<TextInput.Icon icon={"email-outline"} size={20} />}
                  />
                  <TextInput
                    label="Password"
                    secureTextEntry
                    style={{
                      backgroundColor: "",
                      marginBottom: 10,
                      height: 50,
                    }}
                    left={<TextInput.Icon icon={"lock-outline"} size={20} />}
                  />
                  <Pressable>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: 14,
                        textAlign: "right",
                      }}
                    >
                      Forgot password
                    </Text>
                  </Pressable>
                  <TouchableOpacity
                    onPress={() => handleSubmit}
                    style={{
                      backgroundColor: "black",
                      height: 50,
                      justifyContent: "center",
                      borderRadius: 25,
                      marginVertical: 40,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 15,
                      }}
                    >
                      {isSubmitting ? "Loading" : "Login"}
                    </Text>
                  </TouchableOpacity>
                  {/* <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 20 }}
            >
              or login with
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Pressable
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: "gray",
                  borderWidth: 1.5,
                  marginRight: 20,
                }}
              ></Pressable>
              <Pressable
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: "gray",
                  borderWidth: 1.5,
                  marginRight: 20,
                }}
              ></Pressable>
              <Pressable
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: "gray",
                  borderWidth: 1.5,
                }}
              ></Pressable>
            </View> */}
                </>
              )}
            </Formik>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>You don't have an account yet?{` `}</Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: "blue" }}>Register</Text>
            </Pressable>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    position: "relative",
    backgroundColor: "black",
    // opacity: 0.5,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginView: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    height: (screenHeight * 2) / 3,
  },
});
