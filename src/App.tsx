import { useState } from 'react';
import './App.css';
import { PrimaryCheckboxGroup } from './components/checkboxs/PrimaryCheckboxGroup';
import { mocks } from './mocks';

function App() {

  const [checkGroups, setCheckGroups] = useState(mocks)


  return (
    <div className="App">
        <PrimaryCheckboxGroup checkGroups={checkGroups} setCheckGroups={setCheckGroups} />
    </div>
  );
}

export default App;
