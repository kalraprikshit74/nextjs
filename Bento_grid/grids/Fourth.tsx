

import { BackgroundBeams } from "../components/ui/background-beams";

const Second = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded shadow">
        <h4 className="text-xl font-bold mb-2">Track progress</h4>
        <p className="text-neutral-500">Track every step of the candidate's journey, from initial application to rejected appraisal</p>
        <div className=" relative mt-4 flex gap-4 flex-col  min-h-[200px]">
          <div className=" mt-4 mx-auto grid w-fit grid-cols-2 gap-2 z-10 min-h-[200px] min-w-[200px]">
            <div className=" h-[200px] w-[200px] bg-neutral-200 group overflow-hidden flex justify-center relative"><div className='rounded-[10px] p-0.5 bg-white text-shadow-mauve-700 absolute bottom-[-4]  opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:bottom-4 hover text-sm'>Hello, My name...</div><img src="https://assets.aceternity.com/pro/headshots/headshot-5.png" className='p-2 rounded-2xl' alt="avatar" />
            </div>
            <div className=" relative group h-[200px] w-[200px] bg-neutral-200 overflow-hidden flex justify-center "><div className='rounded-[10px] p-0.5 w-[80px] bg-white text-shadow-mauve-700 absolute bottom-[-4]  opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:bottom-4 hover text-sm'>lol, invert a
              binary tree</div><img className='p-2 rounded-2xl' src="https://assets.aceternity.com/pro/headshots/headshot-6.png" alt="avatar" /></div>      
              
          </div>
          <BackgroundBeams className="z-0 opacity-100"/>
        </div>
      </div>
    </div>
  )
}

export default Second
