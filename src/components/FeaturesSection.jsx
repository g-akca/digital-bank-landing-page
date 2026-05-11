import FeaturesList from "./FeaturesList";

function FeaturesSection() {
  return (
    <section className="relative z-10 bg-gray-100 flex justify-center px-6 py-16 tablet:p-20 desktop:py-24 desktop:px-40.5">
      <div className="flex flex-col gap-12 tablet:gap-18 items-center desktop:items-start desktop:max-w-278">
        <div className="flex flex-col gap-4 tablet:gap-8 text-center desktop:text-start max-w-129.5 desktop:max-w-158.75">
          <h2 className="font-light text-[32px] leading-[120%] text-blue-950 tablet:text-[40px] tablet:tracking-[-0.75px]">Why choose Digitalbank?</h2>

          <p className="tablet:text-[18px] tablet:leading-[155%] tablet:tracking-[-0.25px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>

        <FeaturesList />
      </div>
    </section>
  )
}

export default FeaturesSection;