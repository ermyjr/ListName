import React, { useState, useRef } from 'react';
import axios from 'axios';
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

  const [user, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", { 
      name: inputName.current.value, 
      age: inputAge.current.value });

      console.log(data)
    
    /*   setUsers([...user,
       {id: Math.random(),name: inputName.current.value,age: inputAge.current.value}
      ]);
    console.log(data) */
    
  }
  function deleteUser(userId) {
    const newUser = user.filter(user => user.id !== userId);
    setUsers(newUser);
  }

  return (
    <Container>
      <Image alt='people talk' src={People} />
      <ContainerItems>

        <H1> olá! </H1>
        <InputLabel>nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />
        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

        <ul>
          {user.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata de lixo' />
              </button>
            </User>
          ))}

        </ul>

      </ContainerItems>

    </Container>
  );
}

export default App