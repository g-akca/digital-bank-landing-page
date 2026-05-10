import HeroContent from "./HeroContent";
import introBg from "/images/bg-intro-mobile.svg";
import mockupsImg from "/images/image-mockups.png";

function HeroSection() {
  return (
    <section className="pb-14 flex flex-col gap-12">
      <img src={introBg} alt="" aria-hidden className="-mb-20" />
      <img src={mockupsImg} alt="" aria-hidden className="absolute -top-15 w-[92%] left-1/2 -translate-x-1/2" />

      <HeroContent />
    </section>
  )
}

export default HeroSection;