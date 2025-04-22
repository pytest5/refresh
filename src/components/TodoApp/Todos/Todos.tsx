import { DeleteButton } from "../DeleteButton/DeleteButton";
import { TodoStateProps } from "../utils/types";

export const Todos = ({ todos, setTodos }: TodoStateProps) => {
  const deleteTodo = (currentId: string) => {
    const newTodos = todos.filter(({ id }) => id !== currentId);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map(({ name, id }) => (
        <li key={id}>
          {name} <DeleteButton id={id} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  );
};
