//project files
import Eye from "../assets/images/eye-solid.svg";
import EyeSlash from "../assets/images/eye-slash-solid.svg";

export default function ButtonToggleList({ onClick, toggleList }) {
  const icon = toggleList ? EyeSlash : Eye;
  return (
    <button onClick={onClick} className="icon-button toggle">
      {toggleList ? "Hide" : "View"} completed items?
      <img src={icon} alt="eye that opens and closes" className="icon" />
    </button>
  );
}
