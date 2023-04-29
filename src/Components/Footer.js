import React, {Component} from "react";
import styled from "styled-components";
import imgfooter from "../images/footer/logo-footer-1.jpg"

const FooterS = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  p{
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    line-height: 1;
    letter-spacing: normal;
    color: whitesmoke;
    text-decoration: underline;}`

const Img = styled.img`
width: 9vw;
height: 18vh;`

export default class Footer extends Component {
render(){
  return (
    <FooterS>
   <p>Projeto desenvolvido para fins de estudo de consumo de API</p>
   <Img src={imgfooter} alt=""/> 
    </FooterS>
  )
}
}