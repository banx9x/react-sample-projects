import { ErrorResponse } from 'models/todo.model';

const Error: React.FC<ErrorResponse> = ({ message }) => {
  return <div>{message}</div>;
};

export default Error;
