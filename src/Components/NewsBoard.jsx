import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setNewsArticles(res.data.articles);
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching data " + error);
      }
    };
    fetchNews();
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {newsArticles.map((news, id) => (
        <NewsItem
          key={id}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
