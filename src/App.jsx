import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CarDetailsPage from "./pages/CarDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/car-detail" element={<CarDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
