import React, { useState } from 'react';

function App() {
  const [bgColor,setBgColor]=useState('olive')
  const button = ['red', 'blue', 'pink', 'green','white'];


  return (
    <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
      <div className='flex flex-col items-center justify-center h-full space-y-6'>
        <h1 className='text-4xl text-white font-bold '>Dynamic Background Changer</h1>
        
        <div className='flex space-x-4'>

        {button.map((color, index) => {
          return (
            <button
              key={index}
              onClick={()=>setBgColor(color)}
              className='text-black p-4 text-xl rounded-lg'
              style={{ backgroundColor: color }}
            >
              {color}
            </button>

          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
