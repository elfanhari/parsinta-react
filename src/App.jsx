import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandTailwind, IconBrandX } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <PlaceContentCenter>
      <Counter nilaiAwal={5} minDef={3} plusDef={2} />
      <Counter nilaiAwal={2} minDef={3} />
    </PlaceContentCenter>
  );
}

export default App;
