import Home from "@/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Home />} />
    </Routes>
  );
}

export default App;
