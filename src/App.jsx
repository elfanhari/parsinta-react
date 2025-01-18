import { useRef, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';
import useJoke from './hooks/useJoke';

function App() {
  const nameRef = useRef();
  const [name, setName] = useState('Alex');
  const joke = useJoke(name);

  const generateJoke = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };
  return (
    <PlaceContentCenter>
      <form action='' method='POST' onSubmit={generateJoke}>
        <Card>
          <Card.Title>Joke.</Card.Title>
          <Card.Body>
            <p className='mb-4'>{joke.value}</p>

            <Input placeholder='Input name...' ref={nameRef} />
          </Card.Body>
          <Card.Footer>
            <Button type='submit'>Generate a joke.</Button>
          </Card.Footer>
        </Card>
      </form>
    </PlaceContentCenter>
  );
}

export default App;
