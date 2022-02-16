import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Name from '../pages/Name';
import SelectQuestions from '../pages/SelectQuestions';

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/select-questions" element={<SelectQuestions />} />
      </Routes>
    </Router>
  );
}

export default routes;