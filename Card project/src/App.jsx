
import Card from './components/Card'

const App = () => {
    
    const jobPosts = [
  {
    id: 1,
    img: "https://logo.clearbit.com/google.com",
    company: "Google",
    time: "5 days ago",
    post: "Senior UI/UX Designer",
    jobType: "Full Time",
    level: "Senior Level",
    salaryPerHr: "$60/hr",
    place: "Delhi"
  },
  {
    id: 2,
    img: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    time: "3 days ago",
    post: "Junior UI Designer",
    jobType: "Part Time",
    level: "Junior Level",
    salaryPerHr: "$30/hr",
    place: "Noida"
  },
  {
    id: 3,
    img: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    time: "1 week ago",
    post: "Product Designer",
    jobType: "Full Time",
    level: "Mid Level",
    salaryPerHr: "$45/hr",
    place: "Gurgaon"
  },
  {
    id: 4,
    img: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    time: "2 days ago",
    post: "Senior UX Researcher",
    jobType: "Full Time",
    level: "Senior Level",
    salaryPerHr: "$70/hr",
    place: "Delhi"
  },
  {
    id: 5,
    img: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    time: "6 days ago",
    post: "UI Designer",
    jobType: "Part Time",
    level: "Mid Level",
    salaryPerHr: "$40/hr",
    place: "Mumbai"
  },
  {
    id: 6,
    img: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    time: "4 days ago",
    post: "Senior Product Designer",
    jobType: "Full Time",
    level: "Senior Level",
    salaryPerHr: "$65/hr",
    place: "Delhi"
  },
  {
    id: 7,
    img: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    time: "2 weeks ago",
    post: "Junior UX Designer",
    jobType: "Internship",
    level: "Junior Level",
    salaryPerHr: "$25/hr",
    place: "Bangalore"
  },
  {
    id: 8,
    img: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    time: "1 day ago",
    post: "UI/UX Designer",
    jobType: "Full Time",
    level: "Mid Level",
    salaryPerHr: "$50/hr",
    place: "Delhi"
  },
  {
    id: 9,
    img: "https://logo.clearbit.com/linkedin.com",
    company: "LinkedIn",
    time: "3 days ago",
    post: "Senior Interaction Designer",
    jobType: "Full Time",
    level: "Senior Level",
    salaryPerHr: "$68/hr",
    place: "Gurgaon"
  },
  {
    id: 10,
    img: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    time: "1 week ago",
    post: "Junior Visual Designer",
    jobType: "Part Time",
    level: "Junior Level",
    salaryPerHr: "$28/hr",
    place: "Delhi"
  }
];

  return (
    <div className='parent h-full w-full flex flex-wrap justify-around gap-8 bg-gray-900 p-20 '>
       {jobPosts.map(function(detail){
        return <Card img={detail.img} company={detail.company} time={detail.time} post={detail.post} jobType={detail.jobType} level={detail.level} salaryPerHr={detail.salaryPerHr} place={detail.place} />
       })}
     
    </div>
  )
}

export default App