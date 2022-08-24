// This is an Interface file for our Todo App.
// It contains the properties that our Todo Model will have.

// Todo uygulamamız için oluşturduğumuz Model Interface'i.
// içerisinde id, todo, isDone gibi bir todo için hayati değer taşıyan propslar var.
export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}

// // useReducer:
// type Actions = 
// | { type: 'add'; payload: string }
// | { type: 'remove'; payload: number }
// | { type: 'done'; payload: number }

// // TodoReducer:
// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch(action.type){
//         case 'add':
//             return [
//                 ...state, 
//                 {id: Date.now(), todo: action.payload, isDone: false
//                 }
//             ];
//         case 'remove':
//             return state.filter(todo => todo.id !== action.payload);
//         case 'done':
//             return state.map(todo => {
//                 if(todo.id === action.payload){
//                     return {
//                         ...todo,
//                         isDone: !todo.isDone
//                     }
//                 }
//                 return todo;
//             }
//             );
//         default:
//             return state;

// }



// import { useReducer } from 'react'
// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, [])
//   return (
//     <>  
//     </>
//   )
// }

// export default ReducerExample