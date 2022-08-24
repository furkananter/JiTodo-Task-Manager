import { Droppable } from "@hello-pangea/dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

// This interface is for defining the props of the component.
// It is used to typecheck the props of the component.
// todos is an array of Todo's.
// setTodos is a function that sets the state of the todos array.

interface Props { 
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos,completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className=" my-4 flex flex-wrap justify-center md:flex-nowrap lg:flex-nowrap">
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
      <Droppable droppableId="TodosList" >
        {(provided) => (
          <div
           ref={provided.innerRef}
           {...provided.droppableProps}
           className="w-full mr-2 text-white dark:bg-black dark:bg-opacity-0 bg-white bg-opacity-0 shadow-lg backdrop-blur-lg rounded-xl">
            <span className="text-2xl dark:text-gray-100 text-black opacity-70 flex m-4">
              Active Tasks
            </span>
            {todos.map((todo,index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
  )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
           ref={provided.innerRef}
           {...provided.droppableProps}
           className="w-full text-white dark:bg-black dark:bg-opacity-0 bg-white bg-opacity-0 shadow-lg backdrop-blur-lg rounded-xl">
            <span className="text-2xl dark:text-gray-100 text-black opacity-70 flex m-4">
              Completed Tasks
            </span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
  )}
      </Droppable>
      {/* end of completed tasks */}
    </div> /* end of wrap */
  );
};

export default TodoList;
