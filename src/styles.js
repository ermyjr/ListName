
import styled from 'styled-components'
import Background from './assets/background1.svg'

export const Container = styled.div`
height: 100vh;
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
height: 100vh;
background: linear-gradient(157.44deg ,
     rgba(255,255,255,0.6) .84%,
     rgba(255,255,255, 0.6) .85% ,
     rgba(255,255,255,0.15) 100%);
border-radius: 61px 61px 0 0;
padding: 50px 36px;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const H1 = styled.h1`
font-size: 34px;
font-weight: bold;
line-height: 40px;
text-align: center;
margin-bottom: 80px;
color: #FFFFFF;
`;

export const InputLabel = styled.p`
letter-spacing: 0.4px;
color: #EEEEEEEE;
font-weight: bold;
font-size: 18px;
line-height: 22px;
margin-left: 25px;
`;

export const Input = styled.input`
background-color: rgba( 255,255,255,0.25);
box-shadow: 0px 4px 4px rgba( 0,0,0, 0.25);
border-radius: 14px;
border: none;
height: 58px;
width: 343px;
margin-bottom: 34px;
outline: none;
padding-left: 25px;
font-size: 18px;
line-height: 28px;
`;

export const Button = styled.button`
height: 74px;
width: 343px;
background-color: rgba( 0,0,0,0.8);
border-radius: 14px;
border: none;
cursor: pointer;
font-weight: bold;
font-size: 17px;
line-height: 28px;
color: #FFFFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 25px;
margin-bottom: 34px;

&:hover{
          opacity: 0.8;}
&:active{ 
     opacity: 0.5;}
`;

export const User = styled.li`
gap: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba( 255,255,255,0.25);
box-shadow: 0px 4px 4px rgba( 0,0,0, 0.25);
border-radius: 14px;
border: none;
height: 58px;
width: 343px;
outline: none;
padding: 25px;
margin-top: 10px;

p{

     font-style: normal;
     font-size: 20px;
     font-weight: normal;
     line-height: 28px;
     color: #ffffff;
}

button{
     background: none;
     border: none;
     cursor: pointer;
}
`