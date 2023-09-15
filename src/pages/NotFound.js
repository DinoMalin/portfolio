import React from 'react';

const NotFound = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-9xl text-lime-700'>404</h1>
        <p className='text-xl'>Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
