import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsers()
  }, [])
  
  const getUsers = () => {
    axios.get(`/api/get-users`)
        .then(response => setUsers(response.data.results[0]))
        .catch(error => console.log(error))
  };


 console.log(users)

  return (
    <div className="App">
      {/* TODO figure out how to display the data correctly */}
      {(users !== {}) ? <p>{users.gender}</p> : <p>No users</p>}
    </div>
  );
}

export default App;
