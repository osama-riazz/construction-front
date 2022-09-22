import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import '../src/index.css'
import Home from "./components/Home";
import Nopage from "./components/Nopage";
import Completed from "./components/Completed";
import Progress from "./components/Progress";


function App() {
  return (
    <div style={{ minHeight: "100%"  }} className=" bg-orange-50 h-auto">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/progress" element={<Progress />} />

            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
