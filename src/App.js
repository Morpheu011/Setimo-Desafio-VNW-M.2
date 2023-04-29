import React, {Component} from "react";
import * as S from "./style/GlobalStyle"; 
import Header from "./Components/Header.js" 
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"

export default class App extends Component{
  render(){
    return(
      <>
     <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
    )
  } 
}
/* PROJETO EM ANDAMENTO, FUTURAMENTE IREI ADICIONAR AS ROTAS NOS CARDS, RESPONSIVIDADE E TERMINAR A ESTILIZAÇÃO */

