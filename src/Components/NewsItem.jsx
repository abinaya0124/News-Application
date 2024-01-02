import breaking_news from './image/breaking_news.jpeg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:breaking_news}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0, 50):"No title"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "No description is provided right now for this news"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
