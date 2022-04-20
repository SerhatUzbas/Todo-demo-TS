import React, { useRef } from "react";
import classes from "./Newtodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label></label>
      <input type='text' ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
