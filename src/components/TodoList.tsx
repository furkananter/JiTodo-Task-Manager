import { Todo } from "../model";
import SingleTodo from "./SingleTodo";


// This interface is for defining the props of the component.
// It is used to typecheck the props of the component.
// todos is an array of Todo's.
// setTodos is a function that sets the state of the todos array.


interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="text-fourth items-center justify-center md:w-1/2 lg:flex-wrap">
          {/* <div className="text-white items-center justify-center flex-wrap md:w-1/2 lg:flex-wrap"> */}

      {/*  todos.map works like that: 
            - it takes the array of todos and maps it to an array of SingleTodo components.
            - it takes the todo and passes it to the SingleTodo component.
            - it takes the setTodos and passes it to the SingleTodo component.
            - it takes the todos and passes it to the SingleTodo component.
            - key is used to identify each element of the array.

            - TR: todos.map ile todos dizisini SingleTodo component'larına map ediyoruz.
            - TR: todo'yu SingleTodo component'ına gönderiyoruz.
            - TR: setTodos'i SingleTodo component'ına gönderiyoruz.
            - TR: todos'u SingleTodo component'ına gönderiyoruz.
            - TR: key'i her elemanının birbirinden ayrılması için kullanıyoruz.
            
            - DE: todos.map funktioni das Array von Todos in einzelne Todo Components umwandeln.
      */}
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
