import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const FormAdd = ({ newTodo }) => {

  const {onInputChange, formState, onButtonReset} = useForm({
    id: new Date().getTime(),
    description: '',
    done: false
  });

  const onSubmitForm = ( event ) => {
    event.preventDefault();

    if (formState.description.length <= 1) return;

    newTodo && newTodo(formState);
    onButtonReset();
  };

  return (
    <form onSubmit={ onSubmitForm }>
      <input
        type="text"
        className="form-control"
        placeholder="Add Todo"
        name="description"
        value={ formState.description }
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Add
      </button>
    </form>
  )
}

FormAdd.propTypes = {
  newTodo: PropTypes.func
}
