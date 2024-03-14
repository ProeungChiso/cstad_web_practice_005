
'use client';

import { Spinner } from 'flowbite-react';

function LoadingComponent() {
  return (
    <div className='container mx-auto flex justify-center'>
      <Spinner className='w-10 h-10' aria-label="Default example" />
    </div>
  );
}

export default LoadingComponent;
