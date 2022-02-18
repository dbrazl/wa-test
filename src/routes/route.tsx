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
import Result from '../pages/Result';
import SeeResults from '../pages/SeeResults';

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/select-questions" element={<SelectQuestions />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/old/results" element={<SeeResults />} />
      </Routes>
    </Router>
  );
}

export default routes;