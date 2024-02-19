import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Card } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display : 'flex', justifyContent : 'center'}}>
      <Card style ={{padding : 20, width : 500}}>
        <Typography variant = "h5">Welcome to the counter game</Typography>
        <br />
        <Buttons count={count} setCount={setCount} />
        <CountComponent count={count} />

      </Card>

    </div>

  )
}

function Buttons({count, setCount}){
  return <div style={{display : 'flex', justifyContent : 'space-between'}}>
    <Increase count={count} setCount={setCount}/> 
    <Decrease count={count} setCount={setCount}/>
  </div>
}

function Increase({count, setCount}){
  return <div>
      <Button variant = "outlined" onClick={() => {
        setCount(count + 1)
      }}>Increase Counter</Button>
    </div>
}

function Decrease({count, setCount}){
  return <div>
      <Button variant = "outlined" onClick={() => {
        setCount(count - 1)
      }}>Decrease Counter</Button>
    </div>
}

function CountComponent({count}){
  return <div>
    <Typography>{count}</Typography>
  </div>
}

export default App
