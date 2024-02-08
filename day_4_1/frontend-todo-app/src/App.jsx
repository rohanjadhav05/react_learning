import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[todo, setTodo] = useState(
    {
      title: "go to the gym",
      desc : "GYM",
      id : 1
    }
  );

  // var todos = [{
  //     title: "go to the gym",
  //     desc : "GYM",
  //     id : 1
  //   },
  //   {
  //     title: "study hard",
  //     desc : "STUDY",
  //     id : 2
  //   }
  // ]

  setInterval(() =>{
    setTodo({
      title : "go eat something",
      desc : "eat food",
      id : 1
    }, 2000);
  })


 setInterval(() =>{
    todo.title="rohan"
 }, 1000)
 return (
  
    <>
      <h1>Hi There</h1>
      {todo.title}
      {todo.desc}
      {todo.id}
      <PersonName firstName={"Rohan"} lastName={"Jadhav"}></PersonName>
    </>
  )
}

function PersonName(props){
  return <div>
    {props.firstName} {props.lastName}
  </div>
}
export default App
