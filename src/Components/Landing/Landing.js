import styled from 'styled-components';
import axios from 'axios';
import ListUser from '../ListUser/ListUser';
import { useEffect, useState } from 'react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-direction: column;
`

const Landing = props => {
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
    <div>
      {(users[0])
      ? 
        <ListContainer>{users.map((e, i) => {
          return (
            <ListUser key={i} person={e} />
          );
        })}</ListContainer>
      : 
        <ListContainer>Loading Users</ListContainer>
      }
    </div>
  );
}

export default Landing;
