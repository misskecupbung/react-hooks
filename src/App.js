import React, { useState, useEffect } from 'react';

export default function Example(){
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [pagnation, setData] = useState(0);


  useEffect(()=>{
    console.log('mounted')
    if (pagnation ===10){
      console.log('pagnation', pagnation)
    }
  }, [pagnation]);

  return(
    <div>
      <p>You Clicked! {countA} times</p>
      <button onClick={()=>setCountA(countA+1)}>{countA}</button>
      <p>You Clicked! {countB} times</p>
      <button onClick={()=>setCountB(countB+1)}>{countB}</button>
      <p>Use Effect</p>
      <button onClick={()=>setData(pagnation+1)}>{pagnation}</button>
    </div>
  );
}
