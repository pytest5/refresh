export interface ToDo {
  id: string;
  name: string;
}

export interface TodoStateProps {
  todos: Array<ToDo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<ToDo>>>;
}
