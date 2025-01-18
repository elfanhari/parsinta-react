import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useJoke(name) {
  const [joke, setJoke] = useState('');
  const url = `https://api.chucknorris.io/jokes/random?name=${name}`
  useEffect(() => {
    const getJoke = async () => {
      const { data } = await axios(url);
      setJoke(data);
    };
    getJoke();
  }, [name]);

  return joke;
}
