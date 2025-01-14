export default function Input({ val, children, ...props }) {
  return (
    <label className='text-slate-600 mb-1 block' {...props}>
      {val || children}
    </label>
  );
}
