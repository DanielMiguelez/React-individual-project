import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'
import logo from '../assets/Cartographer.webp';
import logo1 from '../assets/littlegirl.webp';

const Home = () => {
    return(
        <div >
            <h1 className="homestyles">Daniel's Newspaper</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non laborum, officiis quaerat quos, labore ducimus modi obcaecati nobis delectus officia voluptas dignissimos ab quae sequi velit recusandae ad facilis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi expedita dolorem modi nam sequi quia, autem exercitationem voluptatum in iste a alias obcaecati nobis quam inventore maxime numquam delectus deleniti magni? Voluptatem, eum in eaque quaerat quam expedita vero iusto corrupti pariatur ullam modi commodi accusantium, doloremque itaque quo. Dolorem?</p>
            <br />
            <div className="pwithimage">
            <img src={logo} width="200" height="200" className="imagehome" />
            <p className="lastparagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dolor doloremque magni aperiam maxime corporis in tempore sapiente magnam delectus fugiat, blanditiis natus. Aut iure at consequuntur adipisci blanditiis error et ducimus, libero doloribus quibusdam soluta? Porro autem sed officia eum ipsum facilis voluptatum temporibus nesciunt, nisi enim libero placeat facere delectus dolorum itaque omnis, vitae fugit doloremque exercitationem.</p>
            </div>
            <hr />
            <span><Link to="/listnews">Weekly top news</Link></span>

            <div >
            <img src={logo1} width="200" height="200" className="imagehome1" />
           
            </div>
            <br />
            <hr />
            <br />
            
        </div>

        
    )
      };

export default Home;