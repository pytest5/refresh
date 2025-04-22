import React from "react";
import { TodoStateProps } from "../utils/types";

export const Form = ({ setTodos, todos }: TodoStateProps) => {
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
