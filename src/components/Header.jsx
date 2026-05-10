import darkLogo from "/images/logo-dark.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";

function Header() {
  return (
    <header className="fixed h-16 w-full p-6 flex justify-between items-center">
      <img src={darkLogo} alt="Digitalbank logo" className="w-38.5" />
      <img src={hamburgerIcon} alt="Menu icon" className="w-6" />
    </header>
  )
}

export default Header;