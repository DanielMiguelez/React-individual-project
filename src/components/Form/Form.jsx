import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

export const Form = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    TituloNoticia: "",
    CuerpoNoticia: "",
    FechaNoticia: "",
  });

  const initialState = {
    TituloNoticia: "",
    CuerpoNoticia: "",
    FechaNoticia: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (data.TituloNoticia.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else if (data.CuerpoNoticia.length < 30) {
      setMessage("Body must be at least 30 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Sending data..." +
        data.TituloNoticia +
        " " +
        data.CuerpoNoticia +
        " " +
        data.FechaNoticia
    );
    localStorage.setItem("noticia", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate("/ListNews");
    }, 3000);
    setVisible(false);
  };

  return (
    <>
    
      <div className="titleform">Send your new 🧑🏼‍💻</div>
      <form onSubmit={handleSubmit} className="formstyle">
      <fieldset >
        <input
          type="text"
          placeholder="Titulo de la noticia"
          value={data.TituloNoticia}
          onChange={handleInputChange}
          name="TituloNoticia"
        />
        <input
          type="text"
          placeholder="Cuerpo de la noticia"
          value={data.CuerpoNoticia}
          onChange={handleInputChange}
          name="CuerpoNoticia"
        />
        <input
          type="date"
          placeholder="Fecha de creacion de la noticia"
          value={data.FechaNoticia}
          onChange={handleInputChange}
          name="FechaNoticia"
        />
        <br />
        <button type="submit" disabled={btnDisabled}>
          Crear la noticia
        </button>
        </fieldset>
       
      </form>
      {<p>{visible ? message : "Redirecting to ListNews..."}</p>}
    </>
  );
};

export default Form;
