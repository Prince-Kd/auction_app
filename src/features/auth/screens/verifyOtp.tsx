import { Formik } from "formik";
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
import { otpValidationSchema } from "../helpers/validationSchema";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function VerifyOtp() {
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
              initialValues={{ otp: "" }}
              onSubmit={async (values, actions) => {
                console.log(values);
                actions.setSubmitting(true);
                actions.setSubmitting(false);
              }}
              validationSchema={otpValidationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <>
                  <View style={{ marginBottom: 10 }}>
                    <OTPInputView
                      // style={{ width: "80%", height: 200 }}
                      pinCount={6}
                      code={values.otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                      // onCodeChanged = {code => { this.setState({code})}}
                      autoFocusOnLoad
                      codeInputFieldStyle={styles.otpDefault}
                      codeInputHighlightStyle={styles.otpFocused}
                      onCodeChanged={handleChange("otp")}
                      onCodeFilled={() => handleSubmit()  }
                    />

                    {errors.otp && touched.otp && (
                      <Text style={{ color: "red" }}>{errors.otp}</Text>
                    )}
                  </View>

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
                        Verify
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
    backgroundColor: "#ffffff",
    padding: 20,
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
  otpDefault: {
    width: 30,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  otpFocused: {borderColor: "black"},
});
