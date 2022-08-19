
const InputField: React.FC = ({
}) => {
    return (
        <div 
            className="flex mt-3 flex-col items-center">
        <input 
            className="w-full h-12 px-2 border border-gray-400 rounded-full" 
            type="text" 
            placeholder="What needs to be done?"
         />
        </div>
    );
}

export default InputField;