import { useState } from "react";

export default function InputField({
  value,
  onChange,
  type,
  placeholder,
  id,
  required,
}) {
  const [touched, setTouched] = useState(false);
  return (
    <input
      value={value}
      onBlur={() => setTouched(true)}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      id={id}
      data-testid="input"
      maxLength="20"
      required={required}
    />
  );
}
