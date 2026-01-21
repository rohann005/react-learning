import React from 'react'

const Rightcarcontent = (dets) => {
  return (
     <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-between p-7">
        <h1 className="flex justify-center items-center text-14 font-bold bg-white h-10 w-10 rounded-full">{dets.id+1}</h1>
        <div>
          <p className="text-lg leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            provident, facilis ex nihil ad vel?
          </p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white px-7 py-3 rounded-full  ">{dets.tag}</button>
            <button className="bg-blue-500 text-white px-3 py-3 rounded-full  ">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Rightcarcontent