import React,{useEffect, useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {

  const [showParagraph,setShowParagraph] = useState(false);

  const paragraphHandler = ()=>{
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>this is new</p>}
      <Button onClick={paragraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
