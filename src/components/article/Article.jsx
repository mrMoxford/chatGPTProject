import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, headline }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_articl-image | bg-dark">
        <img src={imgUrl} alt="blog-article" />
      </div>
      <div className="gpt3__blog-container_artilcle-content | bg-dark">
        <div>
          <p>{date}</p>
          <h3>{headline}</h3>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
