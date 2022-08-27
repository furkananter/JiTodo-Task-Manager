import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { motion} from "framer-motion"

// This interface is for defining the props of the component.
// It is used to typecheck the props of the component.
// todos is an array of Todo's.
// setTodos is a function that sets the state of the todos array.

const styleTodolist = {
  wrap: " my-4 flex flex-wrap justify-center md:flex-nowrap lg:flex-nowrap",
  completedTasks: "w-full mr-2 text-white dark:bg-black dark:bg-opacity-0 bg-white bg-opacity-0 shadow-lg backdrop-blur-lg rounded-xl",
  tasksSpan: "text-2xl dark:text-gray-100 text-black opacity-70 flex m-4"
}

interface Props { 
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
 
  return (
    <motion.div
    initial={{ translateX: -200}}
    animate={{ translateX: 0 , transition: { duration: 1 }}}
    className={styleTodolist.wrap}>

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
       
          <motion.div
           className={styleTodolist.completedTasks} >
            <span className={styleTodolist.tasksSpan} >
              Tasks
            </span>
            {todos.map((todo) => (
              <SingleTodo
                index={todo.id}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </motion.div>
      {/* end of completed tasks */}
    </motion.div> /* end of wrap */
  );
};

export default TodoList;
