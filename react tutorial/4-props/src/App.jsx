import Title from './Title'
import './App.css'
import Box from './Box'
import Student from './Student'
import Button from './components/Button'

 const list1=["Ambuj"," Ajay", "sachin",  "suraj"];
 const list2=["akp","aos","hsg","hsg"]
  const handelclick=()=>{
    alert("btn clicked")
  }
  
 
function App() {


  return (
    <>
    <Button btntype="denger" btntext="denger"  action={handelclick} />
    <Button btntype="succes" btntext="succes" action={handelclick}/>
    <Student  student={list1}/>
    <Student student={list2}/>

    <Title  title="hi Ambuj is my name"/>
     <Box name="Akash pal"  role="React dev"/>
     <Box name="Rakash pal" role="Devops devloper"/>
    </>
  )
}

export default App
