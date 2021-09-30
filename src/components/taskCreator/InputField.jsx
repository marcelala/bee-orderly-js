import { useState } from "react";

export default function InputField({ value, onChange, type, placeholder,id }) {
	const [touched, setTouched] = useState(false);
	const handleBlur = (event) => {
		setTouched((current) => {
			return { ...current, [event.target.id]: true };
		});
	};
	return (
		<input
			value={value}
			onBlur={() => handleBlur}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			id={id}
			maxLength="30"
			min="1"
			max="9999999999"
			required
		/>
	);
}
