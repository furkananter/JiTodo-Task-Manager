import React, { SyntheticEvent } from "react";
import { useState } from "react";
import InputField from "components/InputField";
import { Todo } from "./model";
import TodoList from "components/TodoList";
import { idText } from "typescript";

// Dark Mode:
export const ThemeContext = React.createContext("light");

const styleApp = {
  main: `w-full min-h-screen flex flex-col px-8 md:px-20 lg:px-60 bg-[url('./components/img/light.jpeg')] dark:bg-[url('./components/img/dark.jpeg')] bg-cover text-center`,
  logo: "text-3xl text-black dark:text-white mt-3.5 z-1 font-semibold text-center md:text-4xl md:my-6",
};

const App: React.FC = () => {
  //------------------------------------------------------------
  // dark mode:
  // const [toggle, setToggle] = useState("light");
  // const toggleTheme = () => {
  //   setToggle((curr) => (curr === "light" ? "dark" : "light"));
  // };
  //------------------------------------------------------------

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //------------------------------------------------------------
    // ENG: When we add a todo, we want to add it to the todos array.
    // ENG: It should set our State.
    // TR: Yeni bir todo eklediğimizde bu todo'nun state'imizi güncellemesi gerekir.
    //------------------------------------------------------------
    if (todo.length > 0) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className={styleApp.main}>
      <span className={styleApp.logo}>JiTodo</span> {/* Logo */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />{" "}
      {/* InputField */}
      <TodoList todos={todos} setTodos={setTodos} /> {/* TodoList */}
    </div> /* Main */
  );
};

export default App;
