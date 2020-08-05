import React from 'react';
import Main from './components/Main';
import Main2 from './components2/Main';
// import './App.css';
import './styles/App.scss';
import { HashRouter, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    {/* <HashRouter basename='/'>  */}
    {/* It is important to note we are using HashRouter here as without it on browser refresh, we would get a 404 on our GitHub pages live URL. */}
      <div>
        {/* <Main2 /> */}
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
