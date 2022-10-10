import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./containers/Add/Add";
import View from "./containers/View/View";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
