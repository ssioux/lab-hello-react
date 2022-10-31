import imgLogo from "../assets/iron.png";
import imgLines from "../assets/lines.png";

function Nav() {
  return (
    <nav>
      <img src={imgLogo} alt="logo" width="40px" style={{paddingRight: "600px"}} />
      <img src={imgLines} alt="lines" width="40px" />
    </nav>
  );
}

export default Nav;
