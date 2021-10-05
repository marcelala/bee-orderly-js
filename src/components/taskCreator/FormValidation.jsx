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
  if (!validateEmptyString(input.taskName)) {
    result.taskName = "Task name cannot be empty";
  }
  return result;
};
