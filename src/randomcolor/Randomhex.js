import { useState, useEffect } from 'react';

export default function Randomhex() {
    const [typeofColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState('#1f1f1f');

    function generateRandomColor() {
        if (typeofColor === 'hex') {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            setColor(randomColor);
        } else {
            let randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
            setColor(randomColor);
        }
    }

//gpt
useEffect(() => {
    if (typeofColor === 'hex' && color.startsWith('rgb')) {
      // Convert RGB to Hex
      const rgbArray = color.match(/\d+/g);
      const hexColor = rgbArray
        ? `#${((1 << 24) + (parseInt(rgbArray[0]) << 16) + (parseInt(rgbArray[1]) << 8) + parseInt(rgbArray[2])).toString(16).slice(1)}`
        : color;
      setColor(hexColor);
    } else if (typeofColor === 'rgb' && color.startsWith('#')) {
      // Convert Hex to RGB
      const hex = color.replace('#', '');
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      const rgbColor = `rgb(${r},${g},${b})`;
      setColor(rgbColor);
    }
  }, [typeofColor]);

        return (
            <div  style={{ backgroundColor: color }} className="h-screen w-screen">
                <div className="wrapper-button flex justify-center items-start space-x-5 w-screen">
                    <button className={`button-hex ${!(typeofColor==='rgb')?("bg-sky-500"):("bg-gray-500")} mt-5 rounded px-4 py-2`} onClick={() => setTypeofColor('hex')}>Generate  Hex value</button>
                    <button className={`button-rgb ${typeofColor==='rgb'?("bg-sky-500"):("bg-gray-500")} mt-5 rounded px-4 py-2`} onClick={() => setTypeofColor('rgb')}>Generate  RGB value</button>
                    <button className='button-rgb bg-gray-400 mt-5 rounded px-4 py-2' onClick={generateRandomColor}>Generate Random color</button>
                </div>
                <div className='flex flex-col justify-center align-center items-center w-screen h-screen'>
                    {typeofColor === 'rgb'? (<h1 className='text-white '> The value of rgb is:</h1>):(<h1 className="text-white">The value of hex color is:</h1>)}
                    <h1 className='text-white'>{color}</h1>
                </div>
            </div>
        )
    }