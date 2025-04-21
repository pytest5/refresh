export const Todos = ({ todos }: { todos: Array<string> }) => {
  return (
    <ul>
      {todos.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
  );
};
