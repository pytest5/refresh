import React from "react";

interface Props {
  todos: Array<string>;
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Form = ({ setTodos, todos }: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newTodo = form.get("newTodo");
    if (typeof newTodo === "string") {
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="newTodo" />
    </form>
  );
};
