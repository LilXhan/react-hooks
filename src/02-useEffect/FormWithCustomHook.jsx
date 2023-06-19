import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onButtonReset } = useForm({
    username: '',
    password: '',
    email: ''
  });

  const { username, password, email } = formState;  
  
  return (
    <>
      <h1>Form with custom Hook</h1>
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
      <input 
        type="password"
        className="form-control mt-2" 
        placeholder="password" 
        name="password" 
        value={ password }
        onChange={onInputChange}
      />
      <button
        className="btn btn-danger mt-2"
        onClick={ onButtonReset } 
      >
          Reset
      </button>
    </>
  )
}
