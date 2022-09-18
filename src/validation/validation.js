import * as yup from "yup";


const EMAIL_VALIDATION = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const PHONE_VALIDATION = /^[\+]{0,1}380([0-9]{9})$/

export const validationSchema = yup.object().shape({
    name: yup.string().required("Field is required").min(2, "Too short!").max(60, "Too long!"),
    email: yup.string().matches(EMAIL_VALIDATION, "Enter valid email").required("Field is required").min(2, "Too short!").max(100, "Too long!"),
    phone: yup.string().matches(PHONE_VALIDATION, "Enter valid phone number").required("Field is required"),
    position: yup.number().nullable(true).required("Field is required"),

    photo: yup.mixed()
        .test("fileSize", "Please choose a photo at least 70x70 px", value => value && value.size >= 61 * 61)
        .test("fileSize", "File is too big", value => value.size <= 500000)
        .test("fileType", "Unsupported file format", value => ["image/jpg", "image/jpeg"].includes(value.type))
});
