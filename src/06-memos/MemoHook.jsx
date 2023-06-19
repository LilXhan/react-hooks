import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber=100) => {
  for(let i = 0; i < iterationNumber; i++) {
    console.log('Lestt get it...');
  }

  return `${iterationNumber} iterations`
};

export const MemoHook = () => {

  
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true)

  const memorize = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter: <small> { counter } </small></h1>
      <hr />

      { memorize }

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
