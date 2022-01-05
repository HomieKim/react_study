import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component';

//const SplitMe= React.lazy(() => import('./SplitMe'));

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, SetVisible] = useState(false);

  const onClick = () => {
    SetVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!!
        </p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
