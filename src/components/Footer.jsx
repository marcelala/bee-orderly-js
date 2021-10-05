import github from "../assets/images/fa-brands_github.svg";
import linkedin from "../assets/images/fa-brands_linkedin.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/marcelala/bee-orderly-js">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/marcela-fortis/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
      <span>©{currentYear} Marcela Felix Fortis</span>
    </footer>
  );
}
