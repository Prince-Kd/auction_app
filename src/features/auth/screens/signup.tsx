import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
import { signupValidationSchema } from "../helpers/validationSchema";
import { useAuthStore } from "../store/auth";
import { signupInterface } from "../helpers/authInterface";
import { useState } from "react";

export default function Signup({ navigation }: any) {
  const screenHeight = Dimensions.get("window").height;
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuthStore((state) => state);
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
        {/* <View style={styles.container}> */}
        <View style={styles.loginView}>
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "500" }}
          >
            Sign up
          </Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={async (values: signupInterface, actions) => {
                console.log(values);
                actions.setSubmitting(true);
                await signup(values);
                actions.setSubmitting(false);
              }}
              validationSchema={signupValidationSchema}
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
                      label="Username"
                      style={{
                        backgroundColor: "",
                        height: 50,
                      }}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      left={
                        <TextInput.Icon icon={"account-outline"} size={20} />
                      }
                    />
                    {errors.username && touched.username && (
                      <Text style={{ color: "red" }}>{errors.username}</Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <TextInput
                      label="Email"
                      style={{
                        backgroundColor: "",
                        height: 50,
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      left={<TextInput.Icon icon={"email-outline"} size={20} />}
                    />
                    {errors.email && touched.email && (
                      <Text style={{ color: "red" }}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <TextInput
                      label="Password"
                      secureTextEntry={!showPassword}
                      style={{
                        backgroundColor: "",
                        height: 50,
                      }}
                      value={values.password}
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

                  {/* <TextInput
                    label="Confirm Password"
                    secureTextEntry
                    style={{ backgroundColor: "", height: 50 }}
                    left={<TextInput.Icon icon={"lock-outline"} size={20} />}
                  /> */}

                  <TouchableOpacity
                    onPress={()  => handleSubmit()}
                    style={{
                      backgroundColor: "black",
                      height: 60,
                      justifyContent: "center",
                      borderRadius: 30,
                      marginVertical: 30,
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
                        Signup
                      </Text>
                    )}
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text>Already have an account ?{` `}</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={{ color: "blue" }}>Login</Text>
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
    // padding: 20,
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
