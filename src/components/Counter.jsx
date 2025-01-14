import { useState } from 'react';
import Button from './Button';

export default function Counter(props) {
  const { nilaiAwal = 0, minDef = 1, plusDef = 1 } = props;
  const [count, setCount] = useState(nilaiAwal);

  function operasi(operator, val) {
    // fungsi dinamis
    if (operator == '-') {
      setCount((prevState) => prevState - val);
    } else {
      setCount((prevState) => prevState + val);
    }
  }

  function kurang(val = 1) {
    setCount(count - val);
  }

  function tambah(val = 1) {
    setCount(count + val);
  }

  return (
    <div className='mt-5 flex items-center gap-2'>
      <Button
        onClick={() => {
          // kurang(minDef)
          operasi('-', minDef);
        }}>
        -{minDef}
      </Button>
      <div className='text-5xl font-bold mx-2'>{count}</div>
      <Button
        onClick={() => {
          // tambah(plusDef);
          operasi('+', plusDef);
        }}>
        +{plusDef}
      </Button>
    </div>
  );
}
