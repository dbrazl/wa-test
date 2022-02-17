import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Name from '../pages/Name';
import Ready from '../pages/Ready';
import SelectQuestions from '../pages/SelectQuestions';
import Questions from '../pages/Questions';

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/select-questions" element={<SelectQuestions />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default routes;