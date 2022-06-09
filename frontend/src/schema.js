import * as yup from "yup"

export const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name Is Required"),
    email: yup.string().email().required("Your Email Address Is Required"),
    message: yup.string().required("Your Message Is Required"),
})