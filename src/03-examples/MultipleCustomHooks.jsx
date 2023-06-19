import { useFetch, useCounter } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

  const { increment, counter } = useCounter(1);
  const { data, isLoading, hasError }= useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  const { name, url } = !!data && data.species;
  
  return (
    <>
      <h1>Pokemon API</h1>
      <hr />

      {
        isLoading 
          ? <LoadingQuote /> 
          : <Quote name={ name } url={ url }/>
      }
      <button 
        className="btn btn-primary" 
        onClick={() => increment(1) }
        disabled={isLoading}
      >
        Next
      </button>


    </>
  )
}
