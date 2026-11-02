import React from 'react'
import First from '../grids/First'
import Second from '../grids/Second'
import Third from '../grids/Third'
import Fourth from '../grids/Fourth'
const page = () => {
  return (
    <div className=" min-h-screen m-20">
      <h1 className="text-5xl font-bold mb-8">The perfect ATS score platform</h1>
      <p className="text-lg text-neutral-500 mb-6 w-2xl">Get the most accurate details on your candidate with our state of the art, blazing fast, absolutely zero fact based ATS score generator.</p>
      <div className="grid selection:text-sky-400 selection:bg-blue-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-neutral-100 p-8 lg:min-h-[40rem]">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  )
}

export default page
