import {Bookmark} from  "lucide-react"

const Card = (detail) => {
  return (
    
        <div className='card h-100 w-93 bg-white rounded-xl p-4 flex flex-col justify-between shadow-lg '>
            <div className='top  flex justify-between items-center p-4 '> 
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZCUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="card image" className='w-12 h-12 rounded-3xl'/>
                <button className="flex text-gray-400 items-center gap-2 font-medium border-gray-400 border p-1.5 rounded-xl ">Save<Bookmark /></button>
            </div>
            <div className='center  flex flex-col gap-4 p-4 h-68 '>
                <div>
                <h3 className=" font-medium">{detail.company}  <span className="text-gray-400 text-sm" > {detail.time}</span></h3>
                </div>
                <p className="text-3xl font-semibold mb-0.5">{detail.post}</p>
                <div className="font-semibold">  
                    <span className="h-5 w-10 bg-gray-300 px-2.5 py-1 rounded-lg mr-3">{detail.jobType}</span>
                    <span className="h-5 w-10 bg-gray-300 px-2.5 py-1 rounded-lg">{detail.level}</span>
                </div>
            </div>
            <hr className="text-gray-300" />
            <div className='bottom flex justify-between items-center p-4 '>
                
                <div className="bottom left ">
                  
                    <p className="font-semibold ">{detail.salaryPerHr}</p>
                    <span className="text-gray-400">{detail.place}</span>
                 </div>
                 <button className="bg-black p-2 px-3 rounded-lg text-white">Apply Now</button>
             </div>

        </div>
    
  )
}

export default Card