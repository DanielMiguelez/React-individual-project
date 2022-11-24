import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
    return(
        <div >
            <h1 className="homestyles">Tu periodico de confianza</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non laborum, officiis quaerat quos, labore ducimus modi obcaecati nobis delectus officia voluptas dignissimos ab quae sequi velit recusandae ad facilis!</p>
            <br />
            <hr />
            <h3>Las mejores noticias de la semana </h3>
            <br />
            <hr />
            <span><Link to="/listnews">Lista de Noticias</Link></span>

            
        </div>

        
    )
      };

export default Home;