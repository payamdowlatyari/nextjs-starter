import HoverLink from "./View/HoverLink";
import Icon from "./Icon";

const getTags = (tags: any) => {
  return (
    <div className="portfolio-tag">
      {tags?.map((tag: any) => {
        return <Icon id={tag} />;
      })}
    </div>
  );
};

export default function Card({ item }: any) {
  return (
    <figure className="portfolio-card">
      <div className="portfolio-img-wrapper">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="portfolio-content">
        <div>
          <HoverLink url={item.url} title={item.title} out size="1.25em" />
          <p>{item.description}</p>
        </div>
        {getTags(item.tagIcon)}
      </div>
    </figure>
  );
}
