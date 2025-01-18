import { forwardRef, useEffect, useRef } from "react";

const Input = ({isFocused = false, type = 'text', ...props}) => {
  const input = useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, []);

  return (
    <input
      ref={input}
      {...props}
      type={type}
      className={
        'text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200 border-slate-300 shadow-sm rounded-lg'
      }
    />
  );
};


export default Input
