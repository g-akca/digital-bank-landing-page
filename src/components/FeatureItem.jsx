function FeatureItem({ icon, name, description }) {
  return (
    <li className="flex flex-col items-center gap-10">
      <img src={icon} alt={name} />

      <div className="flex flex-col gap-6">
        <h3 className="font-light text-blue-950 text-[24px] leading-base tracking-[-0.4px]">{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default FeatureItem;