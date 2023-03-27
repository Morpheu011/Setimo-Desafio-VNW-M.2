import React, {Component} from "react";
import * as S from "./style/GlobalStyle"; 
import Header from "./Components/Header.js" 
import Main from "./Components/Main.js"

export default class App extends Component{
  render(){
    return(
      <>
     <S.GlobalStyle/>
    <Header/>
    <Main/>
    </>
    )
  } 
}
/* PROJETO EM ANDAMENTO */