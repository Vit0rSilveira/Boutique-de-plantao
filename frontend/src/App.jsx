import React, { useEffect } from 'react';
import Rotas from './components/routers';
import { BrowserRouter as Router } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';


function App() {

  return (
    <>
      <Router>
        <Rotas />
      </Router>
    </>
  );
}

export default App;
