const validateDigits = (value) => {
  const onlyDigits = /^\d+$/.test(value);
  return onlyDigits;
};

const validateEmptyString = (value) => {
  const notEmptyString = value.trim().length > 0;
  return notEmptyString;
};

export const validateForm = (input) => {
  const result = {};
  if (!validateDigits(input.price)) {
    result.price = "Item price may only contain digits";
  }
  if (!validateEmptyString(input.taskName)) {
    result.taskName = "Enter a valid item name.";
  }
  return result;
};
