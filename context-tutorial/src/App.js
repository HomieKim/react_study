import React from 'react';
import ColorBox from './components/colorBox';
import ColorContext, { ColorProvider } from './contexts/color';

const App = (props) => {
  return (
    <ColorProvider>
      <div>
        <ColorBox/>
      </div>
    </ColorProvider>
  
  );
};

export default App;