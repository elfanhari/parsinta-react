import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandTailwind,
  IconBrandX,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
  return (
    <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
      <div className={'flex gap-x-2'}>
        <Button
          {...{
            type: 'button',
            onClick: () => alert('This is Tailwind with another style..'),
            className: 'bg-cyan-600',
            type: 'reset',
          }}
        >
          <IconBrandTailwind />
          TailwindCSS
        </Button>
        <Button type='submit' onClick={() => alert('Facebook')}>
          <IconBrandFacebook />
          Facebook
        </Button>
        <Button
          onClick={() => alert('This is login with X')}
          className={'bg-pink-600'}
        >
          <IconBrandX />
          X/Twitter
        </Button>
        <Button
          type='button'
          onClick={() => alert('This is login github..')}
          className={'bg-dark'}
        >
          <IconBrandGithub />
          GitHub
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { type = 'button', className = 'bg-blue-600', children, text } = props;
  return (
    <button
      type={type}
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded',
      )}
    >
      {text || children}
    </button>
  );
}
