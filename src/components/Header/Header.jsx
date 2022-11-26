import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'


const Header = () => {
    return (
      <>
        <nav>
         
          <div className="headerdiv">
              <Link to="/"><span>Home 🏯</span></Link>
            <br />
              <Link to="/listnews"><span>ListNews 📰</span></Link>
            <br />
              <Link to="/form"><span>Fill the form 📝</span></Link>
          </div>
        </nav>
      </>
    );
  };

export default Header