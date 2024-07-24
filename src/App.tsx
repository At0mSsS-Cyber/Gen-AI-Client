import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./screens/blog-analyzer"
import SQL from "./screens/sql-query-generator"
const App: React.FC = () => {

  return (
    <Router>
        <Routes>
          <Route path="/Blog-Analyze-AI" element={<Blog />} />
          <Route path="/SQL-Analyze-AI" element={<SQL />} />
        </Routes>
    </Router>
  );
};

export default App;