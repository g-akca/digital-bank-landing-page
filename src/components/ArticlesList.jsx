import ArticleCard from "./ArticleCard";

const articles = [
  {
    writer: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
  },
  {
    writer: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
  },
  {
    writer: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ..."
  },
  {
    writer: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
  }
];

function ArticlesList() {
  return (
    <div className="flex flex-col gap-4">
      {articles.map(article => (
        <ArticleCard
          key={article.title}
          writer={article.writer}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  )
}

export default ArticlesList;