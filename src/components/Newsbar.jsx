import { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

const Newsbar = ({category}) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        articles.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })
      )}
    </div>
  );
};

export default Newsbar;
