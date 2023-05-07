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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const ref = useBlurOnFulfill({ value: otp, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

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
            Verify Code
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
              }) => {
                return (
                  <>
                    <View style={{ marginBottom: 10 }}>
                      <Text
                        style={{ fontSize: 16, textAlign: "center" }}
                      >{`Please enter the verification code \nwe sent to your email.`}</Text>
                      <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={values.otp}
                        onChangeText={handleChange("otp")}
                        cellCount={6}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                          <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[
                              styles.cellRoot,
                              isFocused || symbol ? styles.focusCell : null,
                            ]}
                          >
                            <Text style={styles.cellText}>
                              {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                          </View>
                        )}
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
                    
                  </>
                );
              }}
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
    backgroundColor: "#000000",
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
  codeFieldRoot: {
    marginTop: 20,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  cellRoot: {
    flex: 1,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});
