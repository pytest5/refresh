interface Props {
  deleteTodo: (x: string) => void;
  id: string;
}

export const DeleteButton = ({ id, deleteTodo }: Props) => {
  return <button onClick={() => deleteTodo(id)}>X</button>;
};
