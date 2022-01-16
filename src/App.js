import './App.css';
import axios from 'axios';
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
            <div key={i}>
              <div>{e.name.title + ' ' + e.name.first + ' ' + e.name.last}</div>
              <div>{e.email}</div>
              <div>{e.location.city + '/' + e.location.country}</div>
            </div>
          );
        })}</div>
      : 
        <div>No users to display</div>
      }
    </div>
  );
}

export default App;
