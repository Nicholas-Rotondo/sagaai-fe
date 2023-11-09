import React from 'react';
import './App.css';
import MyButton from './components/TestSaga';
import FlexHeader from './components/Header';

function App() {
  const imagePath = "/Users/nicholasrotondo/sagaai-fe/src/css/img/starry.jpeg";
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      backgroundImage: `url(${require('/Users/nicholasrotondo/sagaai-fe/src/css/img/starry.jpeg')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      }}>
      <FlexHeader title="SagaAI" subtitle="A new way to build your story"></FlexHeader>
      <MyButton label={"This is a string"}></MyButton>
    </div>
  );
}

export default App;
