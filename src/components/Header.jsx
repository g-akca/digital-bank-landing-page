import darkLogo from "/images/logo-dark.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed z-50 h-16 w-full p-6 tablet:px-20 flex justify-center items-center">
      {isMenuOpen && <Menu />}

      <div className="w-full flex justify-between items-center max-w-277.5">
        <img src={darkLogo} alt="Digitalbank logo" className="w-38.5" />

        {isMenuOpen ? (
          <button type="button" onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt="Close menu" className="w-4.5" />
          </button>
        ) : (
          <button type="button" onClick={() => setIsMenuOpen(true)}>
            <img src={hamburgerIcon} alt="Open menu" className="w-6" />
          </button>
        )}
      </div>
    </header>
  )
}

export default Header;