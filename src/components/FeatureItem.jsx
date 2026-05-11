function FeatureItem({ icon, name, description }) {
  return (
    <li className="flex flex-col items-center tablet:items-start gap-10">
      <img src={icon} alt={name} />

      <div className="flex flex-col gap-6">
        <h3 className="font-light text-blue-950 text-[24px] leading-base tracking-[-0.4px]">{name}</h3>
        <p className="tablet:text-[16px] tablet:leading-6.5 tablet:tracking-[-0.25px]">{description}</p>
      </div>
    </li>
  )
}

export default FeatureItem;