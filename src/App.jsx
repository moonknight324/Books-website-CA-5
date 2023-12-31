import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/MainPage";
import Form from "./components/Form";

function App() {
  return (
 <>
 <div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/form" element={<Form />} />
  </Routes>
 </div>
 </>
  );
}

export default App;
