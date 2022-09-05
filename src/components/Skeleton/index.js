import React from 'react'

export const Skeleton = () => (
  <div>
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
    <div className='w-11/12 animate-pulse flex justify-center mx-auto mt-4 bg-skyblue h-28' />
  </div>
);

export const BoardSkeleton = () => (
  <div>
    <div className='w-40 animate-pulse mt-4 bg-skyblue h-10' />
    <div className='w-full animate-pulse mt-10 bg-skyblue h-40' />
    <div className='w-full animate-pulse mt-6 bg-skyblue h-40' />
  </div>
);