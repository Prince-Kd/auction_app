import * as Yup from 'yup';

const signupValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const loginValidationSchema = Yup.object().shape({
  uid: Yup.string().required("Username/Email is required"),
  password: Yup.string()
    .required("Password is required"),
});

const otpValidationSchema = Yup.object().shape({
  otp: Yup.string().min(6, "OTP must be 6 digits").required("OTP is required")
})

export { signupValidationSchema, loginValidationSchema, otpValidationSchema };