import { FiEdit3 } from "react-icons/fi";
import { Todo } from "../model";

// This type is for defining the props of the component.
// Todo is the type of the todo.
// todos is an array of Todo's.
// setTodos is a function that sets the state of the todos array.

//* TR: Bu tip component'ın props'ını tanımlar.
//* TR: Todo tipi todo'yu tanımlar.
//* TR: todos dizisi Todos'un tipini gösterir.
//* TR: setTodos fonksiyonu todos dizisinin state'ini güncelleyen bir fonksiyonudur.


type Props = {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

//! ENG: SingleTodo is a component that renders a form inside a list of our Todo's. 
//! ENG: It will contain the todo's text and a button to edit the todo.


//* TR: SingleTodo component'ı bir liste içinde todo'ların metni ve todo'yı düzenleme butonunu içerir.
//* TR: SingleTodo component'ının props'ında todo, todos ve setTodos'ını alır.


const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }: Props) => {
  return (
    <form className="flex flex-wrap">
      <li className="" key={todo.id}>
        <FiEdit3 className="text-xl" />
        {todo.todo}
      </li>
    </form>
  );
};

export default SingleTodo;
