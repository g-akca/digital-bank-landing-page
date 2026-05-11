import FeaturesList from "./FeaturesList";

function FeaturesSection() {
  return (
    <section className="bg-gray-100 px-6 py-16 tablet:p-20 flex flex-col gap-12 items-center tablet:gap-18">
      <div className="flex flex-col gap-4 tablet:gap-8 text-center max-w-129.5">
        <h2 className="font-light text-[32px] leading-[120%] text-blue-950 tablet:text-[40px] tablet:tracking-[-0.75px]">Why choose Digitalbank?</h2>

        <p className="tablet:text-[18px] tablet:leading-[155%] tablet:tracking-[-0.25px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>

      <FeaturesList />
    </section>
  )
}

export default FeaturesSection;