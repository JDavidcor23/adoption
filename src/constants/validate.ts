import validator from "validator";

export const VALIDATE = (value: string) => {
  if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    })
  ) {
    return false;
  } else {
    return true;
  }
};
