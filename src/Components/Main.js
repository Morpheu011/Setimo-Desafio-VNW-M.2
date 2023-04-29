import React, {Component} from "react";
import axios from "axios";
import styled from "styled-components";

/* ESTILIZAÇÃO */

const MainS = styled.main`
overflow-x: clip;
img:hover{scale: 1.05; transition: 500ms ease-in-out; cursor: pointer;}
img:hover+h2{scale: 1.1; transition: 500ms ease-in-out}
img{height: 37vh; border-radius:1000px; transition: 500ms ease-in-out; border: solid 2px lawngreen;
  box-shadow:0 0 0.1vw  0.1vw lawngreen,   
  0 0 0.1vw  0.1vw lawngreen, 
  0 0   1vw  0.1vw lawngreen,
  inset 0 0 0.1vw  0.1vw lawngreen,
  inset 0 0 0.1vw  0.1vw lawngreen,
  inset 0 0 0.1vw  0.1vw lawngreen;}
h2{position: relative; z-index:1; background: transparent; transition: 500ms ease-in-out}`

const H1 = styled.h1`
text-align: center;
margin-bottom: 4rem;
font-family: 'Delicious Handrawn', cursive;
text-transform: uppercase;
text-decoration: underline lawngreen;`

const SpanLine = styled.span`
/* position: relative;
border: solid lawngreen;
display: flex;
justify-content: center;
height: 20vh; */`

const DivGrandParents = styled.div`
display: flex;
justify-content: space-between;`

const DivGrandparentsSanchez = styled.div`
display: flex;
text-align: center;
gap:1rem;`

const SpanRick = styled.span``

const SpanMsSanchez = styled.span``

const DivGrandparentsSmith = styled.div`
display: flex;
text-align: center;
gap:1rem;`

const SpanLeonard = styled.span``

const SpanJoyce = styled.span``

const H2 = styled.h2`
font-family: 'Patrick Hand SC';
`

const H3 = styled.h3`
display: flex;
align-items: center;
font-family: 'Delicious Handrawn';
text-transform: uppercase;`

const DivParents = styled.div`
display: flex;
justify-content: space-around;
text-align: center;`

const SpanBeth = styled.span``

const SpanJerry = styled.span`
img{transform: scaleX(-1);}`

const DivChildrens = styled.div`
display: flex;
justify-content: space-around;
text-align: center;`

const SpanMorty = styled.span``

const SpanSummer = styled.span``

/* ESTILIZAÇÃO */

/* CONSUMO API */
const API = axios.create ({
  baseURL: "https://rickandmortyapi.com/api/character/[1,2,3,4,5,94,186,201]"
});


export default class Main extends Component {
  state = {
    DadosApi: []
  }

  async componentDidMount() {
    const response = await API.get();
    const items = response.data.map(item => ({ ...item }));
    this.setState({ DadosApi: items });
  }

  render() {
    const { DadosApi } = this.state;
    /* CONSUMO API */
    return (
      
      
      <MainS>
        <H1>Árvore genealógica da familia Sanchez - Smith.</H1>
        <SpanLine></SpanLine>
        <DivGrandParents>
        <DivGrandparentsSanchez>
        <SpanRick>
        <img src={DadosApi[0]?.image} alt={DadosApi[0]?.name} />
        <H2>{DadosApi[0]?.name}</H2> 
        </SpanRick>
        <SpanMsSanchez>
        <img src={DadosApi[5]?.image} alt={DadosApi[5]?.name} />
        <H2>{DadosApi[5]?.name}</H2>
        </SpanMsSanchez>
        </DivGrandparentsSanchez>
        <H3>Avós</H3>
        <DivGrandparentsSmith>
        <SpanJoyce>
        <img src={DadosApi[6]?.image} alt={DadosApi[6]?.name} />
        <H2>{DadosApi[6]?.name}</H2>
        </SpanJoyce>
        <SpanLeonard>
        <img src={DadosApi[7]?.image} alt={DadosApi[7]?.name} />
        <H2>{DadosApi[7]?.name}</H2>
        </SpanLeonard>
        </DivGrandparentsSmith>
        </DivGrandParents>
        <DivParents>
          <SpanBeth>
          <img src={DadosApi[3]?.image} alt={DadosApi[3]?.name} />
          <H2>{DadosApi[3]?.name}</H2>
          </SpanBeth>
          <H3>Pais</H3>
          <SpanJerry>
          <img src={DadosApi[4]?.image} alt={DadosApi[4]?.name} />
          <H2>{DadosApi[4]?.name}</H2>
          </SpanJerry>
        </DivParents>
        <DivChildrens>        
        <SpanSummer>
        <img src={DadosApi[2]?.image} alt={DadosApi[2]?.name} />
        <H2>{DadosApi[2]?.name}</H2> 
        </SpanSummer>
        <H3>Filhos/Netos</H3>
        <SpanMorty>
        <img src={DadosApi[1]?.image} alt={DadosApi[1]?.name} />
        <H2>{DadosApi[1]?.name}</H2> 
        </SpanMorty>
        </DivChildrens>
      </MainS>
    );
  }
}
    