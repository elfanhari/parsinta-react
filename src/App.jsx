import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';
import axios from 'axios';
import { data } from 'autoprefixer';
import { use } from 'react';

function App(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cara1
    // async function getUsers() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response.json()
    //   console.log(data);
    //   setUsers(data);
    // }
    // getUsers()

    // Cara 2
    async function getUsers() {
      setLoading(true);
      try {
        // const { data } = await axios('https://jsonpaceholder.typicode.com/users'); // coba url salah
        const { data } = await axios('https://jsonplaceholder.typicode.com/users'); // coba url bener
        setUsers(data);
      } catch (error) {
        alert(error.message);
      }
      setLoading(false);
    }
    getUsers().then((r) => r);
  }, []);

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Users: {users.length}</Card.Title>
        <Card.Body>
          {loading ? (
            'Loading...'
          ) : users.length ? (
            <ol>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} | ({user.username})
                </li>
              ))}
            </ol>
          ) : (
            <div className=''>Data tidak ada</div>
          )}
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}

export default App;
