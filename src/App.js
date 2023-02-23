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

  const user = [{ id: Math.random(), name: "Elizeu", age: 28 }, { id: Math.random(), name: "Maria", age: 17 }];

  return (
    <Container>
      <Image alt='people talk' src={People} />
      <ContainerItems>
        <H1> olá! </H1>
        <InputLabel>nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar <img alt='seta' src={Arrow} /></Button>

        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name} - {user.age}
          
            </li>
          ))}
        </ul>

      </ContainerItems>
    </Container>


  );
}

export default App