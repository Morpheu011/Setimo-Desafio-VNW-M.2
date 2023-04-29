import React, { Component } from "react";
import LogoHeader from "../images/header/logo-header-center.jpg"
import LogoHover from "../images/header/logo-header-hover.png"
import styled from "styled-components";

/* ESTILIZAÇÃO */

const HeaderS = styled.header`
display: flex;
justify-content: center;`

const ContainerImagesHeader = styled.div`
height: 44vh;
display: flex;
flex-direction: column;
align-items: center;`

const ImgHover = styled.img`
position: relative;
bottom: 4.5rem;
left: 0.5rem;
width: 26vw;
height: 30vh;
background-color: transparent;
opacity: 0;
transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;`

const Img = styled.img`
:hover{scale: 1.1; transition: 800ms ease-in-out; cursor: pointer;}
width: 20vw;
height: 35vh;
transition: 800ms ease-out;
&:hover + ${ImgHover} {
  opacity: 1;}`
/* ESTILIZAÇÃO */
export default class Header extends Component {
  render() {
    return (
      <HeaderS>
        <ContainerImagesHeader>
        <Img src={LogoHeader} alt="Silhueta do Rick e Morty entrando no portal" />
        <ImgHover src={LogoHover} alt="Logo do desenho Rick and Morty" />
        </ContainerImagesHeader>
      </HeaderS>
    )
  }
}