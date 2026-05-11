import HeroContent from "./HeroContent";
import mobileIntroBg from "/images/bg-intro-mobile.svg";
import desktopIntroBg from "/images/bg-intro-desktop.svg";
import mockupsImg from "/images/image-mockups.png";

function HeroSection() {
  return (
    <section className="relative pb-14 tablet:pb-18 flex flex-col gap-12 desktop:gap-8 desktop:flex-row-reverse desktop:justify-between desktop:pl-40 desktop:pb-0 desktop:h-184">
      <picture className="overflow-hidden">
        <source media="(min-width:768px)" srcSet={desktopIntroBg} />
        <img 
          src={mobileIntroBg} 
          alt="" 
          aria-hidden 
          className="
            -mb-20 w-full max-w-300 
            tablet:-mb-68 tablet:w-[137%] tablet:relative tablet:-translate-y-70 tablet:left-1/2 tablet:-translate-x-4/9 
            desktop:absolute desktop:z-0 desktop:max-w-none desktop:w-340 desktop:-translate-y-50 desktop:mb-0 desktop:left-auto desktop:-right-132 desktop:translate-x-0
          " 
        />
      </picture>

      <img src={mockupsImg} alt="" aria-hidden className="absolute z-20 -top-15 tablet:-top-42.5 w-[92%] tablet:w-[83%] max-w-185 left-1/2 -translate-x-1/2 desktop:max-w-194 desktop:-top-24 desktop:left-auto desktop:translate-x-0 desktop:-right-33" />

      <HeroContent />
    </section>
  )
}

export default HeroSection;