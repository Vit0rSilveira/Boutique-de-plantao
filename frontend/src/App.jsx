import React from 'react';
import Rotas from './components/routers';
import { BrowserRouter as Router } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';

function App() {
  return (
    <>
      <Router>
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
        <VLibras forceOnload={true} />
        <Rotas />
      </Router>
    </>
  );
}

export default App;
