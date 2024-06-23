import { check } from "express-validator";
const userValidation = [
  check("name", "First Name is required").isString(),
  check("phone", "Phone number is required").isNumeric(),
  check("email", "Email is required").isEmail(),
  check("password", "Password with 6 or more characters required").isLength({
    min: 6,
  }),
];
export default userValidation;
