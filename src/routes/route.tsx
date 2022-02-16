import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Name from '../pages/Name';

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
      </Routes>
    </Router>
  );
}

export default routes;