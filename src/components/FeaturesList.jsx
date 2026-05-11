import onlineIcon from "/images/icon-online.svg";
import budgetingIcon from "/images/icon-budgeting.svg";
import onboardingIcon from "/images/icon-onboarding.svg";
import apiIcon from "/images/icon-api.svg";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: onlineIcon,
    name: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    icon: budgetingIcon,
    name: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    icon: onboardingIcon,
    name: "Fast Onboarding",
    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    icon: apiIcon,
    name: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  }
];

function FeaturesList() {
  return (
    <ul className="flex flex-col gap-8 max-w-90 tablet:max-w-152 desktop:max-w-279 text-center tablet:text-start tablet:grid tablet:grid-cols-2 tablet:gap-x-14 tablet:gap-y-16 desktop:grid-cols-4 desktop:gap-8">
      {features.map(feature => (
        <FeatureItem 
          key={feature.name}
          icon={feature.icon}
          name={feature.name}
          description={feature.description}
        />
      ))}
    </ul>
  )
}

export default FeaturesList;