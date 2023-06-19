import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef();


  const onClick = () => {
    document.querySelector('input').select();
    console.log(inputRef);
  }; 


  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        ref={ inputRef }
        type="text"
        className="form form-control"
        placeholder="Enter your name"
      />
      
      <button className="btn btn-primary m-2" onClick={ onClick }>
        Focus
      </button>
    </>
  )
}
