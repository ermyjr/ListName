import React from 'react';
import {
  Container, Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button
} from './styles'

function App() {

  return (
    <Container>
      <Image />
      <ContainerItems>
        <H1> olá! </H1>
        <InputLabel>nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar</Button>
        
      </ContainerItems>
    </Container>
  );
}

export default App