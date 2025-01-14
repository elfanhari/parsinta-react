import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandTailwind, IconBrandX } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';

function App() {

  const nilaiAwal = 0;
  const [count, setCount] = useState(nilaiAwal);
  const minDef = 3 // default for minus btn text
  const plusDef = 3 // default for plus btn text

  function operasi(operator, val){ // fungsi dinamis
    if (operator == '-'){
      setCount((prevState) => prevState - val)
    } else {
      setCount((prevState) => prevState + val)
    }
  }

  function kurang(val = 1){
    setCount(count - val)
  }

  function tambah(val = 1){
    setCount(count + val)
  }

  return (
    <PlaceContentCenter>
      <div className="mt-5 flex items-center gap-2">
        <Button onClick={() => {
            // kurang(minDef)
            operasi('-', minDef)
        }}>
          -{minDef}
        </Button>
        <div className="text-5xl font-bold mx-2">{count}</div>
        <Button onClick={() => {
          // tambah(plusDef);
          operasi('+', plusDef)
        }}>
          +{plusDef}
        </Button>
      </div>
    </PlaceContentCenter>
  )

}

export default App;
