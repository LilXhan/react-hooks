// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
import './index.css';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
