import React from 'react';

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white border-t-4 border-green-400 animate-spin rounded-full'></div>
    </div>
  );
};

export default Loader;