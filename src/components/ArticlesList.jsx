import ArticleCard from "./ArticleCard";
import currencyImg from "/images/image-currency.jpg";
import restaurantImg from "/images/image-restaurant.jpg";
import planeImg from "/images/image-plane.jpg";
import confettiImg from "/images/image-confetti.jpg";

const articles = [
  {
    image: currencyImg,
    writer: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
  },
  {
    image: restaurantImg,
    writer: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
  },
  {
    image: planeImg,
    writer: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ..."
  },
  {
    image: confettiImg,
    writer: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ..."
  }
];

function ArticlesList() {
  return (
    <div className="flex flex-col gap-4">
      {articles.map(article => (
        <ArticleCard
          key={article.title}
          image={article.image}
          writer={article.writer}
          title={article.title}
          description={article.description}
        />
      ))}
    </div>
  )
}

export default ArticlesList;