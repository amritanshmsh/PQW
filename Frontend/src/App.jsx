import React, { useState } from 'react';
import './App.css';
import Question from './Components/Question.jsx';
import Page1 from './PageGraph/Page1.jsx';
import Page2 from './PageGraph/Page2.jsx';
import Page3 from './PageGraph/Page3.jsx';

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const components = [<Page1 />, <Page2 />, <Page3 />];

  const toggleComponent = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <main>
        <div className="container">
          {components[currentComponentIndex]}
          <div className='button'>
            <button onClick={toggleComponent}>Next</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
