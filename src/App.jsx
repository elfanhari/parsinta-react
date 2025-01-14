import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandTailwind, IconBrandX } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import Label from './components/Label';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const kosongkanForm = () => {
    setForm({
      name: '',
      email: ''
    })
  }

  function submit(e) {
    e.preventDefault()
    alert(`Hi ${form.name}! Youre registered with your email ${form.email}!`)
    console.log(form);
    kosongkanForm()
  }

  return (
    <PlaceContentCenter>
      {/* <Counter nilaiAwal={5} minDef={3} plusDef={2} />
      <Counter nilaiAwal={2} minDef={3} /> */}

      <Card>
        <form action="" onSubmit={submit}>
        <Card.Title>Sign up for new Account!</Card.Title>
          <Card.Body>
            <div className='mb-5 border rounded-lg p-4'>
              <p>Name : {form.name || '----'}</p>
              <p>Email : {form.email || '----'}</p>
            </div>
            <div className='mb-6'>
              <Label htmlFor='name' val={'Name'} />
              <Input value={form.name} onChange={onChange} id={'name'} name={'name'} required/>
            </div>
            <div className='mb-6'>
              <Label htmlFor='email'>Email</Label>
              <Input type="email" value={form.email} onChange={onChange} name={'email'} id={'email'} required/>
            </div>
          </Card.Body>
        <Card.Footer>
          <Button type="submit">
            <IconBrandGithub />
            Regist
          </Button>
        </Card.Footer>
        </form>
      </Card>
    </PlaceContentCenter>
  );
}

export default App;
