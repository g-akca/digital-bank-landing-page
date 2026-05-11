import darkLogo from "/images/logo-dark.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";
import { useState } from "react";
import Menu from "./Menu";
import InviteButton from "./InviteButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed z-50 h-16 desktop:h-20 w-full p-6 desktop:p-4 tablet:px-20 flex justify-center items-center">
      {isMenuOpen && <Menu />}

      <div className="w-full flex justify-between items-center max-w-277.5">
        <img src={darkLogo} alt="Digitalbank logo" className="w-38.5" />

        <nav className="hidden desktop:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </nav>

        <InviteButton className="hidden desktop:block" />

        <button type="button" onClick={() => setIsMenuOpen(prev => !prev)} className="desktop:hidden">
          {isMenuOpen ? (
            <img src={closeIcon} alt="Close menu" className="w-4.5" />
          ) : (
            <img src={hamburgerIcon} alt="Open menu" className="w-6" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header;