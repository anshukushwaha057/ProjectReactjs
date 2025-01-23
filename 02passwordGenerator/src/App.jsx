import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) str += '1234567890';
    if (charAllowed) str += '~!@#$%^&*()?{}[]';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Password Generator
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            className="border rounded-lg p-2 w-full text-gray-700"
            placeholder="Generated Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password Length: {length}</label>
          <input
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            type="range"
            className="w-full accent-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            Include Numbers
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setcharAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            Include Special Characters
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="bg-green-500 w-full text-white py-2 rounded-lg hover:bg-green-600"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;
