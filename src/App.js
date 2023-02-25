import React from 'react';
import People from './assets/peoplesTalk.svg';
import Arrow from './assets/Arrow.svg';
import Trash from './assets/lixeira.svg';

import {
  Container, Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from './styles'

function App() {

  const user = [
    { id: Math.random(), name: "Elizeu", age: 28 },
    { id: Math.random(), name: "Maria", age: 17 }
  ];

  function addNewUser () {}

  return (
    <Container>
      <Image alt='people talk' src={People} />
      <ContainerItems>
        <H1> olá! </H1>
        <InputLabel>nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

        <ul>
          {user.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt='lata de lixo'/></button>
          
            </User>
          ))}
        </ul>

      </ContainerItems>
    </Container>


  );
}

export default App