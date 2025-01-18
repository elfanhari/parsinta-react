import { useRef } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';

function App() {
  const inputRef = useRef(null); // Inisialisasi useRef

  function handleClick() {
    alert('oke')
    // if (inputRef.current) {
    //   inputRef.current.focus(); // Fokus ke input yang di-referensikan
    // }
  }

  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Tick</Card.Title>
        <Card.Body>
          <Input
            isFocused
            placeholder="Input Email"
            className="border border-black mt-3"
          />
          <Input
            placeholder="Input Password"
            className="border border-black"
          />
          <Button onClick={handleClick}>
            Tick
          </Button>
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}

export default App;
