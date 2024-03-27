import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] h-screen w-full'>
      <div className='absolute top-[5%] flex justify-center py-10 text-xl font-semibold  w-full text-zinc-500'>Documents</div>
      <h1 className='absolute text-[13vw] leading-none tracking-tighter text-zinc-900 font-semibold  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
    </div>
  )
}

export default Background