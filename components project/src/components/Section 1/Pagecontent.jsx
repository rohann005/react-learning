
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (dets) => {
  return (
    <div className='flex h-[85vh] p-6 '>
        <Leftcontent/>
        <Rightcontent user={dets.user}/>
    </div>
  )
}

export default Pagecontent