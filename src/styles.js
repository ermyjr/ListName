import styled from 'styled-components'
import Background from './assets/background1.svg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;


`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItems = styled.div`
background: linear-gradient(157.44deg ,
     rgba(255,255,255,0.6) .84%,
     rgba(255,255,255, 0.6) .85% ,
     rgba(255,255,255,0.15) 100%);
border-radius: 61px 61px 0 0;
padding: 50px 36px;
display: flex;
flex-direction: column;

`;

export const H1 = styled.h1`
`;

export const InputLabel = styled.p`

`;

export const Input = styled.input`
`;

export const Button = styled.button`
`;