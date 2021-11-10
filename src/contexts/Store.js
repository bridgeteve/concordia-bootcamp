import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  const getFeatured = () => {
   const featuredArt = articles.filter((post) => {
      return post.fields.featured
    })
return featuredArt;
  };

  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeaturedArticle: getFeatured, articles }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
