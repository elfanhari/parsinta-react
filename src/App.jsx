import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandTailwind, IconBrandX } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <>

    {/* <div className={'bg-slate-100 grid place-content-center min-h-screen'}>
      <div className={'flex gap-x-2'}>
        <Button
          {...{
            type: 'button',
            onClick: () => alert('This is Tailwind with another style..'),
            className: 'bg-cyan-600',
            type: 'reset',
          }}>
          <IconBrandTailwind />
          TailwindCSS
        </Button>
        <Button type='submit' onClick={() => alert('Facebook')}>
          <IconBrandFacebook />
          Facebook
        </Button>
        <Button onClick={() => alert('This is login with X')} className={'bg-pink-600'}>
          <IconBrandX />
          X/Twitter
        </Button>
        <Button type='button' onClick={() => alert('This is login github..')} className={'bg-black'}>
          <IconBrandGithub />
          GitHub
        </Button>
      </div>
    </div> */}

    <div className={'bg-slate-100 text-slate-800 tracking-tight antialliased flex items-center justify-center min-h-screen'}>
      <div className="max-w-2xl w-full flex items-center gap-4">
        <Card>
          <Card.Title>
            Hello React
          </Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maiores.
          </Card.Body>
          <Card.Footer>
            <Button>Show</Button>
          </Card.Footer>

        </Card>

        <Card>
          <Card.Title>
            Hello React
          </Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maiores.
          </Card.Body>
          <Card.Footer>
            <Button>Show</Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Title>
            Hello React
          </Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maiores.
          </Card.Body>
          <Card.Footer>
            <Button>Show</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
    </>
  );
}

const Title = () => {
  <>
    <h1>Hello World!</h1>
    <h2>Hello World 2!</h2>
  </>;
};


export default App;
