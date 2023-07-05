import {useState} from 'react';

import styled from 'styled-components';
import {Wrapper} from './components/Wrapper';
import {Counter} from './components/Counter';
import {Info} from './components/Info';

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); 

  const handleStep = indicator =>{
    setStep(currentStep => indicator === '+' ? currentStep + 1 : currentStep - 1);
  }

  const handleCount = indicator =>{
    setCount(currentCount => indicator === '+' ? currentCount + step : currentCount - step);
  }

  return <Wrapper>
    <Counter onClick={handleStep} count={step} text="Step" />
    <Counter onClick={handleCount} count={count} text="Counter" />
    <Info count={count} />
  </Wrapper>    
}

export default App
