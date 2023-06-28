import React, { useState } from 'react';
import "./App.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000, // Duration in milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('0');

  const compressText = async() => {
    const response = await fetch('/api/compress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText, opt: selectedOption}),
    });

    const data = await response.json();
    setOutputText(data.compressed);
  };

  const decompressText = async() => {
    const response = await fetch('/api/decompress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText, opt: selectedOption}),
    });

    const data = await response.json();
    if(data.decompressed === ""){
      showErrorToast("Invalid compressed data")
    }
    else{setOutputText(data.decompressed)};
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='page'>
      <ToastContainer style={{textAlign:'left', backgroundColor:'#00000'}}/>
      <div className='container'>
        <h1 className='text-wrapper'>LZW Compression</h1>
        <div className='wrapper'>
          <div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="  Input.."
              className='text-box'
            ></textarea>
          </div>
          <div >
            <label>
              <input
                type="radio"
                value="1"
                checked={selectedOption === '1'}
                onChange={handleOptionChange}
              />
              Binary
            </label>
            <label>
              <input
                type="radio"
                value="0"
                checked={selectedOption === '0'}
                onChange={handleOptionChange}
              />
              Decimal
            </label>
          </div>
          <button style={{ margin: '10px' }} onClick={compressText}>
            Compress
          </button>
          <button style={{ margin: '10px' }} onClick={decompressText}>
            Decompress
          </button>
          <div>
            <textarea className='text-box' value={outputText} readOnly placeholder="  Result.." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
