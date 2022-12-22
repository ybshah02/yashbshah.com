import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from './home/src.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
