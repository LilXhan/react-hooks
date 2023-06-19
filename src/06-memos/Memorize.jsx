import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";
export const Memorize = () => {

  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>Counter: <Small value={ counter }>{ counter }</Small></h1>
      <hr />
      <button
        onClick={ () => increment(1) }
      >
        +1
      </button>
      <button 
        className="btn btn-outlined-primary"
        onClick={ () => setShow(!show) }  
      >
        Show: { JSON.stringify(show) }
      </button>
    </>
  )
}
