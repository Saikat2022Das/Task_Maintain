import "./App.css";
import "./MyComponents/style.css";
import Loginpage from "./MyComponents/Loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CombinedPage from "./MyComponents/CombinedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/CombinedPage" element={<CombinedPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
