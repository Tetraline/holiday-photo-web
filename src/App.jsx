import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddImage from "./containers/AddImage/AddImage";
import AddHoliday from "./containers/AddHoliday/AddHoliday";
import View from "./containers/View/View";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-image" element={<AddImage />} />
        <Route path="/add-holiday" element={<AddHoliday />} />
        <Route path="/view" element={<View />} />
        <Route path="/add-image/:id" element={<AddImage />} />
      </Routes>
    </Router>
  );
}

export default App;
