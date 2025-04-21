import React from "react";
import { Form } from "./Form/Form";
import { Todos } from "./Todos/Todos";

export const TodoApp = () => {
  const [todos, setTodos] = React.useState<Array<string>>([]);
  return (
    <>
      <div>Hi im a todo list</div>
      <Form setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
    </>
  );
};
