import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import InputField from 'components/InputField';
import { Todo } from './model';


// Sonra buna bakacağım.
// const style = {
//   main: "w-screen h-screen flex flex-col items-center bg-primary",
//   header: "text-3xl mt-3.5 z-1 text-white font-semibold text-center md:text-4xl md:mt-10",
// }



const App: React.FC = ()  => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // ENG: When we add a todo, we want to add it to the todos array. 
    // ENG: It should set our State.

    // TR: Yeni bir todo eklediğimizde bu todo'nun state'imizi güncellemesi gerekir.
    setTodos( [...todos, { id: Date.now(), todo: todo , isDone: false}] );
  }

  return (
    <div className="w-full h-screen flex flex-col px-8 md:px-20 lg:px-60 bg-primary text-center ">
        <span className="text-3xl text-white mt-3.5 z-1 font-semibold text-center md:text-4xl md:my-6">JiTodo</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
