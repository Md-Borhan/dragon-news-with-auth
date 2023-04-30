import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCardd from "../NewsCard/NewsCardd";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>News {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCardd key={news._id} news={news}></NewsCardd>
      ))}
    </div>
  );
};

export default Category;
