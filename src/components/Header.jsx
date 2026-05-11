import darkLogo from "/images/logo-dark.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";
import { useState } from "react";
import Menu from "./Menu";
import InviteButton from "./InviteButton";

const navStyles = "relative transition-all duration-200 hover:text-blue-950 after:transition-all after:duration-200 after:absolute after:content-[''] after:h-1 after:w-0 after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:bg-linear-15 after:from-[#2AB6D9] after:to-[#33D35E] after:to-90% hover:after:w-full";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed z-50 h-16 desktop:h-20 w-full p-6 desktop:p-4 tablet:px-20 flex justify-center items-center">
      {isMenuOpen && <Menu />}

      <div className="w-full flex justify-between items-center max-w-277.5">
        <img src={darkLogo} alt="Digitalbank logo" className="w-38.5" />

        <nav className="hidden desktop:flex items-center gap-8">
          <a href="#" className={navStyles}>Home</a>
          <a href="#" className={navStyles}>About</a>
          <a href="#" className={navStyles}>Contact</a>
          <a href="#" className={navStyles}>Blog</a>
          <a href="#" className={navStyles}>Careers</a>
        </nav>

        <InviteButton className="hidden desktop:block" />

        <button type="button" onClick={() => setIsMenuOpen(prev => !prev)} className="cursor-pointer desktop:hidden">
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