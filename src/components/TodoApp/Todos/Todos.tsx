import React from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { TodoStateProps } from "../utils/types";

export const Todos = ({ todos, setTodos }: TodoStateProps) => {
  const deleteTodo = (id: number) => todos.filter(({ id }) => id === id);
  return (
    <ul>
      {todos.map((i) => (
        <li>
          {i} <DeleteButton />
        </li>
      ))}
    </ul>
  );
};
