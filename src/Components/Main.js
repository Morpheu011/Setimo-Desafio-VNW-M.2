import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
/* Estilização */
const Span = styled.span`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
  height: 30vh;
  width: 30vw;
}
`
const H1 = styled.h1`
text-align: center;`

/* Estilização */


/* consumo API */
const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});


export default class Main extends Component {
  state = {
    info: []
  }
  pegarPersonagens = async () => {
    const resposta = await API.get();
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item
      };
    }
    );
    this.setState({
      info: itensApi
    });
    console.log(resposta.data.results);
  };
  componentDidMount() {
    this.pegarPersonagens();
    console.log(this.state.info)
  }
/* consumo API */


  render() {
    const data = this.state.info.slice(0, 5)
    return (
      <>
        <main>
          <section>
            <H1>Familia Sanchez/Smith</H1>
            {data.map((item) => (
            <Span>
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name}/>
              </Span>
                ))}
          </section>
        </main>
      </>
    )
  }
}
