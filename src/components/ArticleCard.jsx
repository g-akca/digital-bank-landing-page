function ArticleCard({ image, writer, title, description }) {
  return (
    <article className="bg-white rounded-[5px] overflow-hidden">
      <img src={image} alt="Article image" className="w-full h-50 object-cover" />

      <div className="px-7.5 tablet:px-10 py-6 flex flex-col gap-4">
        <p className="text-[10px] leading-base">By {writer}</p>

        <div className="flex flex-col gap-2">
          <h3 className="font-light text-[16px] leading-[120%] tracking-[-0.25px] text-blue-950">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard;