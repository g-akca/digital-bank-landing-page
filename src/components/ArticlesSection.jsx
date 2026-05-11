import ArticlesList from "./ArticlesList";

function ArticlesSection() {
  return (
    <section className="py-16 px-6 tablet:p-20 flex flex-col items-center gap-12 tablet:gap-16 desktop:max-w-278 desktop:mx-auto desktop:items-start desktop:px-0">
      <h2 className="text-blue-950 text-[32px] tablet:text-[40px] leading-[120%] font-light tracking-[-0.5px] tablet:tracking-[-0.75px] text-center desktop:text-start">Latest Articles</h2>

      <ArticlesList />
    </section>
  )
}

export default ArticlesSection;