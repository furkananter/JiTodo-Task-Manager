
const InputField: React.FC = () => {
    return (
        <form className="flex mt-3 items-center relative ">
        <input 
            className="w-full h-12  text-white rounded-full bg-second placeholder-fifth focus:outline-none focus:text-white pl-8 md:h-16" 
            type="text" 
            placeholder="What needs to be done?"
         />
         <button
         onClick={(e) => {
            e.preventDefault();
            alert("You clicked me!");
         }}
          className="absolute flex right-1 justify-center items-center bg-white w-10 h-10 rounded-[100%] md:right-3 md:w-12 md:h-12 hover:shadow-md hover:bg-gray-200 ">Go</button>
        </form>
    );
}

export default InputField;
 