import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState({});

  // TODO figure out how to get this effect to only fire once. Might not be able to use useState() hook.
  useEffect(() => {
    getUsers()
  })
  
  const getUsers = () => {
    axios.get(`/api/get-users`)
        .then(response => setUsers(response.data.results[0]))
        .catch(error => console.log(error))
  };


 console.log(users)

  return (
    <div className="App">
      {/* TODO figure out how to display the data correctly */}
      (users) ? <p>{users.name.first}</p> : <p>No users</p>
    </div>
  );
}

export default App;
