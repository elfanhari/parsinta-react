export default function PlaceContentCenter({ children }) {
  return (
    <div className='bg-black'>
      <div className='bg-violet-200/20 min-h-screen flex items-center justify-center antialiased tracking-tight'>
        <div className='max-w-lg w-full min-h-creen text-violet-50'>{children}</div>
      </div>
    </div>
  );
}
