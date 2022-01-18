import styled from 'styled-components';
import axios from 'axios';
import ListUser from './Components/ListUser/ListUser';
import { useEffect, useState } from 'react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = () => {
    axios.get(`/api/get-users`)
        .then(response => setUsers(response.data))
        .catch(error => console.log(error))
  };


 console.log(users)

  return (
    <div className="App">
      {(users)
      ? 
        <ListContainer>{users.map((e, i) => {
          return (
            <ListUser key={i} person={e} />
          );
        })}</ListContainer>
      : 
        <div>No users to display</div>
      }
    </div>
  );
}

export default App;
