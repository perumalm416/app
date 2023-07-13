import { Fragment } from "react";
import { Login } from "./Components/Login";
import { TodoForm } from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";

export const TodoApplication = () => {
  return (
    <Fragment>
      <Login />
      <TodoForm/>
      <TodoList/>
    </Fragment>
  );
};
