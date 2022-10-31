import imgLogo from "../assets/iron.png";
import imgLines from "../assets/lines.png";

function Nav() {
  return (
    <nav>
      <img src={imgLogo} alt="logo" />
      <img src={imgLines} alt="lines" />
    </nav>
  );
}

export default Nav;
