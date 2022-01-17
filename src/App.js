import './App.css';
import axios from 'axios';
import ListUser from './Components/ListUser';
import { useEffect, useState } from 'react';

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
        <div>{users.map((e, i) => {
          return (
            <ListUser key={i} person={e} />
          );
        })}</div>
      : 
        <div>No users to display</div>
      }
    </div>
  );
}

export default App;
