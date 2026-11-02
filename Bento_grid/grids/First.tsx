import React from 'react'

const First = () => {
  return (
    <div className="p-4 bg-white rounded h-full shadow-2xl lg:row-span-2 ">
      <h4 className="text-xl font-bold mb-2">Generate scores based on pictures</h4>
      <p className="text-neutral-500">Rate your candidate's looks. As real as ATS scores.</p>
      <div className="mt-4 mx-auto grid w-fit grid-cols-2 gap-2">
        <div className="rounded-2xl overflow-hidden flex justify-center [height=170 width=80]"><img src="https://assets.aceternity.com/pro/headshots/headshot-3.png" alt="avatar" /></div>
        <div className="rounded-2xl overflow-hidden flex justify-center [height=170 width=80]"><img src="https://assets.aceternity.com/pro/headshots/headshot-2.png" alt="avatar" /></div>
        <div className="rounded-2xl overflow-hidden flex justify-center [height=170px] [ width=80]"><img src="https://assets.aceternity.com/pro/headshots/headshot-1.png" alt="avatar" /></div>
        <div className="rounded-2xl overflow-hidden flex justify-center [height=170 width=80]"><img src="https://assets.aceternity.com/pro/headshots/headshot-4.png" alt="avatar" /></div>
      </div>
    </div>
  )
}

export default First
