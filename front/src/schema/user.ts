import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const emailNotShortEnough = "email must be at most 255 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const passwordNotShortEnough = "password must be at most 255 characters";
export const invalidEmail = "email must be a valid email";

export const registerPasswordValidation = yup.string().min(3, passwordNotLongEnough).max(255).required();

export const validUserSchema = yup.object().shape({
  email: yup.string().min(3, emailNotLongEnough).max(255).email(invalidEmail).required(),
  password: registerPasswordValidation,
});

// const invalidLogin = "invalid login";

export const loginSchema = yup.object().shape({
  email: yup.string().min(3, emailNotLongEnough).max(255, emailNotShortEnough).email(invalidEmail).required(),
  password: yup.string().min(3, passwordNotLongEnough).max(255, passwordNotShortEnough).required(),
});

export const changePasswordSchema = yup.object().shape({
  newPassword: registerPasswordValidation,
});
