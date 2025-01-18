import clsx from 'clsx';

export default function Button(props) {
  const { type = 'button', className = 'bg-black', children, text } = props;
  return (
    <button
      type={type}
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-white px-4 h-10 py-2 rounded-lg',
      )}>
      {text || children}
    </button>
  );
}
