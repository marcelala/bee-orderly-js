export default function Checkbox({ checked, onChange }) {
  return (
    <label htmlFor="checkbox" className="checkbox-label">
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className={`checkmark ${checked && "checked"}`}></div>
    </label>
  );
}
