import React from 'react';
import ColorBox from './components/colorBox';
import SelectColors from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';

const App = (props) => {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
    </ColorProvider>
  
  );
};

export default App;