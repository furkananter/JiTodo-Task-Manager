
import { Todo } from "../model";
import { IoTrashBinOutline } from "react-icons/io5";
import {MdDone,MdEdit, MdEditOff} from "react-icons/md";

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
 
  //! ENG: This function is used to get done the todo.
  const handleDone = (id:number) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
     ))
     console.log(todo.isDone)
  }
  //! ENG: This function is used to delete the todo.
  const handleDelete = (id:number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id))
  }
  //! ENG: This function is used to edit the todo.
  // const handleEdit = (id:number) => {
  //   setTodos(
  //     todos.map((todo) => 
  //     todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
  //    ))
  // }

  return (
    <form className="flex bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-white justify-between p-4 items-center mx-2 my-4 rounded-md">
      {todo.isDone ? (
        <s className="whitespace-normal overflow-x-auto dark:text-white text-white opacity-70 line-clamp-2 text-lg capitalize">{todo.todo}</s  > /* Todo lined Item */
        ): (
          
        <span className="whitespace-normal overflow-x-auto dark:text-white line-clamp-1 text-lg capitalize">{todo.todo}</span> /* Todo Item */
      )}


      <div className="flex items-center justify-center">
        {/*
            - Eğer butonum isDone'da true döndürüyorsa bu durumda, MdEditOff iconunu çalıştır.
            - Aynı zamanda isDone true döndüğü zaman button için disabled olmasını sağlar.
            - Span için yapmak istiyordum ama bunu spana uygulayamadım. 
            - Eğer butonum isDone'da false döndürüyorsa bu durumda, MdEdit iconunu çalıştır.
            
            - Butonumun çalışıp çalışmadığını görmek için console.log("Tıklandı") yazdırıyorum.
            - Butonum isDone : true iken çalışmıyor. isDone : false ise çalışıyor.
            - ekranın yenilenmesini önlemek için ise e parametresiyle e.preventDefault yapıyorum.
            eğer 
         
        */}
        <button
         onClick={(e) => {
          e.preventDefault();
          console.log("Tıklandı")
        }}
         className="mr-2 hover:text-white hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md disabled:opacity-30"
         disabled={todo.isDone ? true : false}
         >
          {todo.isDone ? (
            <MdEditOff size={24} />
            ): <MdEdit size={24} />
          }
        </button> {/* Edit icon */}
        <span
        onClick={() => handleDelete(todo.id)} 
        className="mr-2 hover:text-white hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md">
          <IoTrashBinOutline size={24} />
        </span> {/* Delete */}
        <span 
        className=" hover:text-white hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md"
        onClick={() => handleDone(todo.id)}
        >
          <MdDone size={24}/>
        </span> {/* Check */}
      </div> {/* Edit and Delete buttons */}
    </form> // Form
  );
};

export default SingleTodo;
