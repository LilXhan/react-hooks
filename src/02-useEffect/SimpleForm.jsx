import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState , setFormState] = useState({
    username: 'flavio123',
    email: 'alvaradotuctod@gmail.com',
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  };
  
  useEffect(() => {
    // console.log('use effect calls');
  }, []);

  useEffect(() => {
    // console.log('formState change!!!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);


  return (
    <>
      <h1>Simple Form</h1>
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={ username }
        onChange={onInputChange}
      />
      <input 
        type="email"
        className="form-control mt-2" 
        placeholder="email" 
        name="email" 
        value={ email }
        onChange={onInputChange}
      />

     {
      (username === 'flavio12') && <Message />
     }
    </>
  )
}
