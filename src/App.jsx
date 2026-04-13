import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Booking from "./components/booking/Booking";
import Singleroom from "./pages/details/single/Singleroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/details/single" element={<Singleroom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
     