import * as yup from 'yup'

export const schema = yup.object().shape({
  fullname: yup.string().required("Enter your fullname"),
  email: yup.string().email().required("Enter you email"),
  age: yup
    .number()
    .positive()
    .min(18)
    .max(90)
    .required("Enter you correct age"),
  password: yup.string().min(4).max(20).required("Enter your password"),
  Cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "you password don't match").required()
});