import React from 'react';
import {IoIosCheckmark} from 'react-icons/io';


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;

}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    return (
        <form className="flex mt-3 items-center relative" onSubmit={handleAdd}>
        <input 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full h-12 text-white rounded-full bg-second placeholder-fifth  shadow-special-before text-sm focus:shadow-special transition-shadow pl-8 md:h-16 outline-none border-2" 
            type="text"
            placeholder="What needs to be done?"
         />
         <button
         type='submit'
         onClick={(e) => {
            e.preventDefault();
         }}
          className="absolute flex right-1 justify-center items-center bg-white w-10 h-10 rounded-[100%] md:right-2 md:w-12 md:h-12 hover:bg-gray-200  active:scale-[0.95] active:shadow-sm">
            <IoIosCheckmark className="text-4xl text-second"/>
          </button>
        </form>
    );
}

export default InputField;
 