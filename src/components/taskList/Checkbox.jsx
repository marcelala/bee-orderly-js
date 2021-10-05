export default function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          data-testid="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
