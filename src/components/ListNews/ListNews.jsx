import React,{useEffect, useReducer, useContext} from 'react'
import './ListNews.scss'
import axios from "axios"
import { GlobalContext } from '../../context/GlobalState'

const ListNews = () => {
  const {getNews, news}=useContext(GlobalContext)

  useEffect(() => {
    getNews();
  }, []);

const n = news.map((n)=>{
  return(
    <>
    <p>{n.abstract}</p>
    <img src={n.multimedia[1]}/>
    <p>{n.source}</p>
    </>
  );
})
  return ( 
    <div >ListNews{n}</div>
  );
};

export default ListNews