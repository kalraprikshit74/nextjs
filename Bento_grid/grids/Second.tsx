import React from 'react'

const Second = () => {
  return (
    <div>
       <div className="p-4 bg-white rounded shadow">
      <h4 className="text-xl font-bold mb-2">Track progress</h4>
      <p className="text-neutral-500">Track every step of the candidate's journey, from initial application to rejected appraisal</p>
      <div className="mt-4 flex gap-4 flex-col">
      <div className="mt-4 mx-auto flex gap-3">

       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
       <div className='w-3 h-3 rounded-full bg-neutral-100 border border-neutral-400'></div>
    </div>
      <div className=" h-25 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:20px_100%] grid justify-center gap-5 ">
        <div className=' w-35 flex h-8 border border-neutral-200 items-center justify-center rounded-[5px] bg-[whitesmoke] px-2  text-xs text-neutral-600 shadow-lg hover:border-2'>Application Submitted</div>
        <div className=' w-30 flex h-8 items-center justify-center border border-neutral-200 rounded-[5px] bg-[whitesmoke] px-2 text-xs  translate-x-26.5 text-neutral-600 shadow-lg hover:border-2'>Interview started</div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Second
