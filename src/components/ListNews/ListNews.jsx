import React,{useEffect} from 'react'
import './ListNews.scss'
import axios from "axios"
import { useState } from 'react'


const ListNews = () => {
  const[characters, setCharacters]= useState([])
  const getCharacters = async(character)=>{
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character")
      setCharacters(res.data.results)
      console.log("respuesta", characters)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCharacters();
  }, []);

const character = characters.map((character)=>{
  return(
    <>
    <p>{character.name}</p>
    <img src={character.image} />
    </>
  );
})
  return (
    <div >ListNews{character}</div>
  );
};

export default ListNews