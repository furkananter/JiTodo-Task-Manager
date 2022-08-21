import React, { useRef } from "react";
import { IoIosCheckmark } from "react-icons/io";

const styleForm =  {
    form: 'flex mt-3 items-center relative',
    input: 'w-full h-12 text-white rounded-full bg-second placeholder:text-slate-400 shadow-special-before font-light text-sm md:text-xl lg:text-2xl focus:shadow-special transition-shadow pl-8 md:h-16 outline-none border-2',
    button: "absolute flex right-1 justify-center items-center bg-white w-10 h-10 rounded-[100%] md:right-2 md:w-12 md:h-12 hover:bg-gray-200  active:scale-[0.95] active:shadow-sm",   
    icon: 'text-4xl text-second'
}

//* ENG: This is the InputField Propses interface.
//*! TR: Bu InputField Props'larının interface'i.
//* DE: Dies ist das InputField Props Interface.

// todo: String, setTodo: Function, handleAdd: Function
// setTODO: için önerilen type React.Dispatch<React.SetStateAction<string>> 'miş.
// handleAdd: için önerilen type React.FormEvent. Çünkü içerisindeki e'ye yani Event'e veriyoruz. O da bir FormEvent'i.
// Void kullanılmasının bir nedeni; e için herhangi bir değer dönmez. Any'nin tam tersi gibi düşünülebilir.

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className={styleForm.form}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className={styleForm.input}
        type="text"
        placeholder="Enter a Task"
      />
      {/* Input Element */}
      <button 
        type="submit"
        className={styleForm.button}
      >
        <IoIosCheckmark className={styleForm.icon}/>
      </button>
      {/* Button Element */}
    </form> /* Form Element (Wrapper of InputField) */
  );
};

export default InputField;
