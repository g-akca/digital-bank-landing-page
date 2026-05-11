import lightLogo from "/images/logo-light.svg";
import facebookIcon from "/images/icon-facebook.svg";
import youtubeIcon from "/images/icon-youtube.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";
import InviteButton from "./InviteButton";

function Footer() {
  return (
    <footer className="grow bg-blue-950 py-14 desktop:py-12 flex justify-center text-white">
      <div className="grow max-w-277.5 flex flex-col gap-8 items-center desktop:flex-row desktop:items-start desktop:justify-between">
        <div className="flex flex-col gap-8 items-center desktop:flex-row desktop:gap-30">
          <div className="flex flex-col gap-8 items-center desktop:items-stretch desktop:gap-14">
            <img src={lightLogo} alt="Digitalbank logo" className="w-38.25" />

            <nav className="flex gap-4 items-center">
              <button type="button" className="cursor-pointer">
                <img src={facebookIcon} alt="Facebook icon" />
              </button>
              <button type="button" className="cursor-pointer">
                <img src={youtubeIcon} alt="Youtube icon" />
              </button>
              <button type="button" className="cursor-pointer">
                <img src={twitterIcon} alt="Twitter icon" />
              </button>
              <button type="button" className="cursor-pointer">
                <img src={pinterestIcon} alt="Pinterest icon" />
              </button>
              <button type="button" className="cursor-pointer">
                <img src={instagramIcon} alt="Instagram icon" />
              </button>
            </nav>
          </div>

          <nav className="flex flex-col gap-4 text-center desktop:text-start desktop:grid desktop:grid-cols-[160px_160px] desktop:gap-y-6 desktop:gap-x-8">
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-1 desktop:col-start-1">About Us</a>
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-2 desktop:col-start-1">Contact</a>
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-3 desktop:col-start-1">Blog</a>
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-1 desktop:col-start-2">Careers</a>
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-2 desktop:col-start-2">Support</a>
            <a href="#" className="transition-all hover:text-green-400 desktop:row-start-3 desktop:col-start-2">Privacy Policy</a>
          </nav>
        </div>

        <div className="flex flex-col gap-6 items-center desktop:items-end">
          <InviteButton />

          <p className="opacity-50">© Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;