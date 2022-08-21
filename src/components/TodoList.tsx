import { Todo } from "../model"
import {FiEdit3} from "react-icons/fi"

interface Props{
    todos : Array<Todo>;
    setTodos : React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC <Props> = ({todos, setTodos}: Props) => {
  return (
    <div className="text-white w-full items-center justify-center flex">
        {todos.map((todo) => (
            <div className="flex flex-wrap">
                <li className="" key={todo.id}>
                    <FiEdit3 className="text-xl" />
                    {todo.todo}
                </li>
            </div>
        ))}
    </div>
  )
}

export default TodoList