import { useState, React} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[todo, setTodo] = useState(
    {
      title: "go to the gym",
      desc : "GYM",
      id : 1
    },
    {
      title: "go to the bar",
      desc : "BAR",
      id : 2
    }
  );
  
  const [a, setA] = useState(Math.random())
  const nonState = Math.random();
  console.log(todo);
  console.log(nonState);
  console.log("render")
  // let array = [{
  //   name : "rohan",
  //   age : 24
  // },{
  //   name : "snehal",
  //   age : 21
  // },{
  //   name : "rushee",
  //   age : 27
  // }]

  //let newArray = [];

  // function doubleArray(array){
  //   array.map((e) => {
  //     if(e.age > 22){
  //       newArray.push({
  //         name : e.name,
  //         age : e.age,
  //         isAllowed : true
  //       })
  //     }else{
  //       newArray.push({
  //         name : e.name,
  //         age : e.age,
  //         isAllowed : false
  //       })
  //     }
  //   })  
  //   console.log(newArray+" array is");
  // }
  // for(let i = 0 ; i < newArray.length; i++){
  //   console.log(newArray[i]);
  // }

  doubleArray(array);
  var todos = [{
      title: "go to the gym",
      desc : "GYM",
      id : 1
    },
    {
      title: "study hard",
      desc : "STUDY",
      id : 2
    }
  ]

//   setInterval(() =>{
//     setTodo({
//       title : "go eat something",
//       desc : "eat food",
//       id : 1
//     }, 100);
//   })


//  setInterval(() =>{
//     todo.title="rohan"
//  }, 1000)
 return (
    <div>
      
       <TODO title ={todo.title} desc = {todo.desc}></TODO>
       <TODO title ={todo.title} desc = {todo.desc}></TODO>
       <TODO title ={todo.title} desc = {todo.desc}></TODO>
    </div>
  )
}

// function PersonName(props){
//   return <div>
//     {props.firstName} {props.lastName}
//   </div>
// }

function TODO(props){
  return <div>
    {props.title}
    {props.desc}
  </div>
}
export default App
