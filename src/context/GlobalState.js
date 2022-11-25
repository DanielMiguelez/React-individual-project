import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    const res = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=it54JtKS9PfgoBndW9NyIykDW8ZM5p4F");
    dispatch({
      type: "GET_NEWS",
      payload: res.data.response.docs,
    });
  };
  return (
    <GlobalContext.Provider
        value={{
            news: state.news,
            getNews,
    }}
    >
    {children}
    </GlobalContext.Provider>
    );
};

