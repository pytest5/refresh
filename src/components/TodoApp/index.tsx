import React from "react";
import { Form } from "./Form/Form";
import { Todos } from "./Todos/Todos";
import { ToDo } from "./utils/types";

export const TodoApp = () => {
  const [todos, setTodos] = React.useState<Array<ToDo>>([]);
  return (
    <>
      <div>Hi im a todo list</div>
      <Form setTodos={setTodos} todos={todos} />
      <Todos setTodos={setTodos} todos={todos} />
    </>
  );
};
