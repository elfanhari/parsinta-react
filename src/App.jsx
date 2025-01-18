import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';

function App() {
  const [name, setName] = useState('')
  const [online, setOnline] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(window.scroll)

  // selalu di render jika ada suatu perubahan dimanapun
  useEffect(() => {
    // console.log('saya selalu di render');
  })

  // Di render sekali saat pertama saja
  useEffect(() => {
    console.log('Aku terender di awal saja!');
  }, [])

  // Di render saat variable terkait ada perubahan/ c. Online
  useEffect(() => {
    // console.log(`I am now ${online ? 'online' : 'offline'}`);
  }, [online])

  function updateScrollPosition(){
    const windowScrolling = window.scrollY;
    console.log(`Window scroll position ${windowScrolling}`);
    setScrollPosition(windowScrolling)
  }

  useEffect(() => {
    console.log('Attaching')
    window.addEventListener('scroll', updateScrollPosition)
    return () => {
      console.log('Detaching')
      window.removeEventListener('scroll', updateScrollPosition)
    }
  },)

  return (
    <div className={'h-[4000px]'}>
      <Input value={name} onChange={(e) => setName(e.target.value)}/>
      <Button onClick={(e) => setOnline(!online)}>Set {online ? 'offline' : 'online'}</Button>
    </div>
  );
}

export default App;
