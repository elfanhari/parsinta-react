import { forwardRef, useRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    type={type}
    className={
      'text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
    }
  />
));

export default Input;
