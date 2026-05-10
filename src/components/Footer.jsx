import lightLogo from "/images/logo-light.svg";
import facebookIcon from "/images/icon-facebook.svg";
import youtubeIcon from "/images/icon-youtube.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="grow bg-blue-950 py-14 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-8 items-center">
        <img src={lightLogo} alt="Digitalbank logo" className="w-38.25" />

        <nav className="flex gap-4 items-center">
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={youtubeIcon} alt="Youtube icon" />
          <img src={twitterIcon} alt="Twitter icon" />
          <img src={pinterestIcon} alt="Pinterest icon" />
          <img src={instagramIcon} alt="Instagram icon" />
        </nav>
      </div>

      <nav>

      </nav>

      <div>

      </div>
    </footer>
  )
}

export default Footer;