import validator from "validator";

export const validate = (value: string) => {
  if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return false;
  } else {
    return true;
  }
};
