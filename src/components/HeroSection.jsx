import HeroContent from "./HeroContent";
import mobileIntroBg from "/images/bg-intro-mobile.svg";
import desktopIntroBg from "/images/bg-intro-desktop.svg";
import mockupsImg from "/images/image-mockups.png";

function HeroSection() {
  return (
    <section className="pb-14 tablet:pb-18 flex flex-col gap-12">
      <picture className="overflow-hidden">
        <source media="(min-width:768px)" srcSet={desktopIntroBg} />
        <img src={mobileIntroBg} alt="" aria-hidden className="-mb-20 w-full max-w-none tablet:-mb-68 tablet:w-[137%] tablet:relative tablet:-translate-y-70 tablet:left-1/2 tablet:-translate-x-4/9" />
      </picture>

      <img src={mockupsImg} alt="" aria-hidden className="absolute -top-15 tablet:-top-42.5 w-[92%] tablet:w-[83%] left-1/2 -translate-x-1/2" />

      <HeroContent />
    </section>
  )
}

export default HeroSection;