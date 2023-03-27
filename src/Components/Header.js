import React, { Component } from "react";
import LogoHeader from "../images/header/logo-header-center.jpg"
import LogoHover from "../images/header/logo-header-hover.png"
import styled from "styled-components";

/* ESTILIZAÇÃO */

const HeaderS = styled.header`
/* display: flex;
justify-content: center;
align-items: center; */
border:solid 1px white;`

const ContainerImagesHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ImgHover = styled.img`
/* definir um tamanho para a imagem depois */
/* deixar ela abaixo da imagem mais colada ao aparecer*/
background-color: transparent;
opacity: 0;
transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`

const Img = styled.img`
/* talvez criar um hover que aplie a imagem */
/* definir um tamanho para a imagem depois */
&:hover + ${ImgHover} {
  opacity: 1;}

`


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