import FeaturesList from "./FeaturesList";

function FeaturesSection() {
  return (
    <section className="px-6 py-16 flex flex-col gap-12 text-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-light text-[32px] leading-[120%] text-blue-950">Why choose Digitalbank?</h2>

        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>

      <FeaturesList />
    </section>
  )
}

export default FeaturesSection;