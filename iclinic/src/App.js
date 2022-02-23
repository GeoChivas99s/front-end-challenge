import * as React from "react";
import Home from "./views/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Theme from './utils'

const App = () => {
  return (

      <Router>
        <Routes>
        
          <Route  path="/" element={<Home />} />
        </Routes>
      </Router>

  );
};

export default App;
