import { Todo } from "../model";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdDone, MdEdit, MdEditOff, MdDoneAll } from "react-icons/md";
import React, { useEffect, useState, useRef } from "react";
import {motion} from "framer-motion";

//--------------------------------------------------------------------------------
// This type is for defining the props of the component.
// Todo is the type of the todo.
// todos is an array of Todo's.
// setTodos is a function that sets the state of the todos array.

// TR: Bu tip component'ın props'ını tanımlar.
// TR: Todo tipi todo'yu tanımlar.
// TR: todos dizisi Todos'un tipini gösterir.
// TR: setTodos fonksiyonu todos dizisinin state'ini güncelleyen bir fonksiyonudur.
//--------------------------------------------------------------------------------

type Props = {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

//-------------------------------------------------------------------------------
// ENG: SingleTodo is a component that renders a form inside a list of our Todo's.
// ENG: It will contain the todo's text and a button to edit the todo.

// TR: SingleTodo component'ı bir liste içinde todo'ların metni ve todo'yı düzenleme butonunu içerir.
// TR: SingleTodo component'ının props'ında todo, todos ve setTodos'ını alır.
//--------------------------------------------------------------------------------

const SingleTodo: React.FC<Props> = ({
  todo,
  setTodos,
  todos,

}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  

  //! ENG: This function is used to get done the todo.
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  };

  //! ENG: This function is used to delete the todo.
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //------------------------------------------------------------------------------------
  // ENG: This function is used to edit the todo.
  // TR: Bu fonksiyon todo'yu editlememizi sağlar.

  // Çalışma prensibi de şudur;
  // 2 parametre alır, biri FormEvent olan event (e), diğeri string olan todo'yı düzenleme için gönderilen type'ı number olan id değeri.
  // preventDefault yapılmasının amacı ekran yenilenmesini önlemektir.
  // Daha sonra setTodos fonksiyonu ile todos dizisini güncelleyecektir.
  // todo.id , id'ye eşitse (true dönüyorsa) {... önceki todoları döndür, todo'yu aç ve değiştirilebilir hale getir}
  // bu olmazsa, todo'yu döndür.
  // en sonda setEdit'i false yaparak edit işlemini kapat.
  //------------------------------------------------------------------------------------
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  //------------------------------------------------------------------------------------
  // TR: useRef Hook'u ile Edit Butonuna basıldığında direkt focus almasını sağlayacağız.
  // ENG: This function used for focus the edit input. With this code, you can directly focus the edit input.

  // Çalışma prensibi de şudur;
  //
  //------------------------------------------------------------------------------------
  const editRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (edit) {
      editRef.current?.focus();
    }
  }, [edit]);

  return (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , transition: { duration: 0.5 }}}
          onSubmit={(e) => {
            handleEdit(e, todo.id);
          }}
          className="flex bg-white dark:bg-black dark:text-white text-white md:text-black md:dark:text-white dark:bg-opacity-20 bg-opacity-20 backdrop-blur-lg drop-shadow-lg justify-between p-4 items-center mx-2 my-4 rounded-md hover:shadow hover:bg-opacity-30"
        >
          {edit ? (
            <input
              ref={editRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className={` p-2 ${
                editTodo <= "0"
                  ? "bg-red-600 bg-opacity-30 animate-wiggle"
                  : "dark:bg-black bg-white bg-opacity-20 dark:bg-opacity-20"
              } rounded-md text-xs md:text-base lg:text-lg outline-none `}
            />
          ) : todo.isDone ? (
            <motion.s
            initial={{ x: -10 }}
            animate={{ x: 0 ,transition: {duration:0.5}}}
            className="whitespace-normal overflow-x-auto dark:text-white text-black opacity-60 dark:opacity-70 text-xs md:text-base lg:text-lg capitalize">
              {todo.todo}
            </motion.s> /* Todo lined Item */
          ) : (
            <span className="whitespace-normal overflow-x-auto dark:text-white text-xs md:text-base lg:text-lg capitalize">
              {todo.todo}
            </span> /* Todo Item */
          )}
          <div className="flex items-center justify-center">
            {/*
          //------------------------------------------------------------------------------------
           bg-black bg-opacity-20
            - 1) Eğer butonum isDone'da true döndürüyorsa bu durumda, MdEditOff iconunu çalıştır.
            - 2) Aynı zamanda isDone true döndüğü zaman button için disabled olmasını sağlar.
            - 3) Span için yapmak istiyordum ama bunu spana uygulayamadım. 
            - 4) Eğer butonum isDone'da false döndürüyorsa bu durumda, MdEdit iconunu çalıştır.
            
            - 5) Butonumun çalışıp çalışmadığını görmek için console.log("Tıklandı") yazdırıyorum.
            - 6) Butonum isDone : true iken çalışmıyor. isDone : false ise çalışıyor.
            - 7) ekranın yenilenmesini önlemek için ise e parametresiyle e.preventDefault yapıyorum.
            - 8) bunu şu an kullanmama gerek kalmadı.

            // ÖNEMLİ: handleEdit fonksiyonunun düzgün çalışabilmesi için butonumuza type="button" vermemiz gerekir.

            --! ENG: 1) If the button is done, then this state, MdEditOff icon will be shown.
            --! ENG: 2) Also, the button will be disabled when isDone is true.
            --! ENG: 3) tried to use the span but I couldn't do it.
            --! ENG: 4) If the button isDone = false, then MdEdit icon will be shown.
            --! ENG: 5) I used console.log("Clicked") to see if the button is working or not.
            --! ENG: 6) If the button isDone = true, then it's not working. isDone = false is working.
            --! ENG: 7) I used e.preventDefault to prevent the page from refreshing.
            --! ENG: 8) I didn't need to use it right now.
            
            // IMPORTANT: To make the handleEdit function work properly, I have to get the type="button" for the button.

          //--------------------------------------------------------------------------------------
        */}
            <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,transition: {duration:0.4, delay: 0.2} }}
              type="button"
              onClick={() => {
                // eğer, edit ve isDone true ise, setEdit true döndürsün.
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
              className="mr-2 hover:text-black dark:hover:text-white hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md disabled:opacity-30"
              disabled={todo.isDone ? true : false}
            >
              {todo.isDone ? <MdEditOff size={24} /> : <MdEdit size={24} />}
            </motion.button>
            {/* Edit Icon Button */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 ,transition: {duration:0.6, delay: 0.2} }}
              onClick={() => handleDelete(todo.id)}
              className="mr-2 hover:text-black dark:hover:text-white  hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md"
            >
              <IoTrashBinOutline size={24} />
            </motion.span>
            {/* Delete Button */}
            <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,transition: {duration:0.8, delay: 0.2} }}
              className="hover:text-black dark:hover:text-white hover:bg-opacity-30 hover:bg-white opacity-80 active:scale-[0.95] p-1.5 rounded-md"
              onClick={() => handleDone(todo.id)}
            >
              {todo.isDone ? (
                <MdDoneAll
                  className="dark:text-green-300 text-green-700"
                  size={24}
                />
              ) : (
                <MdDone size={24} />
              )}
            </motion.span>
            {/* Done Button */}
          </div>
          {/* Edit and Delete buttons */}
        </motion.form>
        /* Form */
  );
};

export default SingleTodo;
