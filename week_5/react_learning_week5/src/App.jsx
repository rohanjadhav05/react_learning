import { createContext, useContext, useState } from 'react'
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
  useSetRecoilState,
} from 'recoil';

const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    // <CountContext.Provider value={{
    //   count : count,
    //   setCount : setCount
    // }}>
    <RecoilRoot>
      <div style={{display : 'flex', justifyContent : 'center'}}>
        <Card style ={{padding : 20, width : 500}}>
          <Typography variant = "h5">Welcome to the counter game</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
      </RecoilRoot>
  //  </CountContext.Provider>
  )
}

function Buttons(){
  return <div style={{display : 'flex', justifyContent : 'space-between'}}>
    <Increase /> 
    <Decrease />
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(countstate);
  // const [count, setCount ] = useContext();
  return <div>
      <Button variant = "outlined" onClick={() => {
         setCount(existingCount => existingCount + 1);
      }}>Increase Counter</Button>
    </div>
}

function Decrease(){
  const setCount = useSetRecoilState(countstate);
  // const [count, setCount ] = useContext();
  return <div>
      <Button variant = "outlined" onClick={() => {
        setCount(existingCount => existingCount - 1);
      }}>Decrease Counter</Button>
    </div>
}

function CountComponent(){
  //const {count, setCount} = useContext(CountContext);
  const count = useRecoilValue(countstate);
  return <div>
    <Typography variant = "h6" textAlign = {'center'}>
      {count}
    </Typography>
  </div>
}

export default App

const countstate = atom({
  key: 'countstate', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
