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
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { loginInterface } from "../helpers/authInterface";
import { useAuthStore } from "../store/auth";
import { loginValidationSchema } from "../helpers/validationSchema";
import { useState } from "react";

export default function Login({ navigation }: any) {
  const screenHeight = Dimensions.get("window").height;
  const { login } = useAuthStore((state) => state);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
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
                console.log(values);
                actions.setSubmitting(true);
                await login(values);
                actions.setSubmitting(false);
              }}
              validationSchema={loginValidationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <>
                  <View style={{ marginBottom: 10 }}>
                    <TextInput
                      label="Email/Username"
                      style={{
                        backgroundColor: "",
                        height: 50,
                      }}
                      onChangeText={handleChange("uid")}
                      onBlur={handleBlur("uid")}
                      value={values.uid}
                      left={<TextInput.Icon icon={"email-outline"} size={20} />}
                    />
                    {errors.uid && touched.uid && (
                      <Text style={{ color: "red" }}>{errors.uid}</Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <TextInput
                      label="Password"
                      secureTextEntry={!showPassword}
                      value={values.password}
                      style={{
                        backgroundColor: "",
                        height: 50,
                      }}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      left={<TextInput.Icon icon={"lock-outline"} size={20} />}
                      right={
                        <TextInput.Icon
                          onPress={() => setShowPassword(!showPassword)}
                          icon={
                            showPassword ? "eye-off-outline" : "eye-outline"
                          }
                          size={20}
                        />
                      }
                    />
                    {errors.password && touched.password && (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    )}
                  </View>

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
                    onPress={() => handleSubmit()}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "black",
                      height: 60,
                      justifyContent: "center",
                      borderRadius: 30,
                      marginVertical: 40,
                    }}
                  >
                    {isSubmitting ? (
                      <ActivityIndicator size={"large"} color={"white"} />
                    ) : (
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 15,
                        }}
                      >
                        Login
                      </Text>
                    )}
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
    borderTopRightRadius: 50,
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
