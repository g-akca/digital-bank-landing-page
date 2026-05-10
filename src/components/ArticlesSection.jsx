import ArticlesList from "./ArticlesList";

function ArticlesSection() {
  return (
    <section className="py-16 px-6 flex flex-col gap-12">
      <h2 className="text-blue-950 text-[32px] leading-[120%] font-light tracking-[-0.5px] text-center">Latest Articles</h2>

      <ArticlesList />
    </section>
  )
}

export default ArticlesSection;