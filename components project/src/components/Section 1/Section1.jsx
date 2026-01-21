import Navbar from "./Navbar"
import Pagecontent from "./Pagecontent"

const Section1 = (dets) => {
  return (
    <div className=' h-screen w-screen p-8'>
        <Navbar/>
        <Pagecontent user={dets.user}/>
    </div>
  )
}

export default Section1