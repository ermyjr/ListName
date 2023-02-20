
import React from 'react';
import People from './assets/peoplesTalk.svg';
import Arrow from './assets/Arrow.svg';

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
      <Image alt='people talk' src={People} />
      <ContainerItems>
        <H1> olá! </H1>
        <InputLabel>nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar <img alt='' src={Arrow}/></Button>

      </ContainerItems>
    </Container>
  );
}


export default App