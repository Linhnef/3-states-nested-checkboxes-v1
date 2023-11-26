import { useState } from 'react';
import './App.css';
import { PrimaryCheckboxGroup } from './components/checkboxs/PrimaryCheckboxGroup';
import { mocks } from './mocks';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
`

function App() {

  const [checkGroups, setCheckGroups] = useState(mocks)

  return (
    <Container>
        <div>
            <h1>State-LevelAlgorithm:3-statesNestedCheckboxes</h1>
        </div>
        <PrimaryCheckboxGroup checkGroups={checkGroups} setCheckGroups={setCheckGroups} />
    </Container>
  );
}

export default App;
