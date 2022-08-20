import React from 'react';
import InputField from 'components/InputField';


// Sonra buna bakacağım.
// const style = {
//   main: "w-screen h-screen flex flex-col items-center bg-primary",
//   header: "text-3xl mt-3.5 z-1 text-white font-semibold text-center md:text-4xl md:mt-10",
// }



const App: React.FC = ()  => {
  return (
    <div className="w-full h-screen flex flex-col px-20 bg-primary text-center ">
        <span className="text-3xl text-third mt-3.5 z-1 font-semibold text-center md:text-4xl md:my-6">Jitodo</span>
        <InputField />
    </div>
  );
}

export default App;
