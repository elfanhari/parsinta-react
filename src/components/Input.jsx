export default function Input({ type = 'text', ...props }) {
  const {name = ''} = props
  return (
    <input
      {...props}
      type={type}
      className={
        'transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
      }
      placeholder={'Input ' + name  + '...'}
    />
  );
}
