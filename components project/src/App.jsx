import Section1 from "./components/section 1/section1"
import Section2 from "./components/Section 2/section2"


const App = () => {

    const user = [
     {img  : "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&w=1000&q=80", intro :"", tag :"Satisfied"},
      {img : "https://plus.unsplash.com/premium_photo-1661627243816-97a918876575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx3b3JraW5nJTIwcHJvZmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D", intro :"", tag :"underserved"}, 
      {img : "https://plus.unsplash.com/premium_photo-1661766884446-83c79ca4b514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHx3b3JraW5nJTIwcHJvZmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D", intro :"", tag :"underbanked"}
    ]


  return (
    <>
      <Section1 user={user} />
      <Section2 />
    </>
  )
}

export default App