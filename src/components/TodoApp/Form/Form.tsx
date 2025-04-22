import React from "react";

interface ToDo {
  id: string;
  name: string;
}

interface Props {
  todos: Array<ToDo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<ToDo>>>;
}

export const Form = ({ setTodos, todos }: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newTodo = form.get("newTodo");
    if (typeof newTodo === "string") {
      setTodos([...todos, { id: crypto.randomUUID(), name: newTodo }]);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="newTodo" />
    </form>
  );
};
