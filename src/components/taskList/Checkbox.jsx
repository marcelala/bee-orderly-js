export default function Checkbox({ checked, onChange }) {
	return (
		<div className="checkbox-wrapper">
			<input
				type="checkbox"
				className="status"
				checked={checked}
				onChange={onChange}
			/>
		</div>
	);
}
