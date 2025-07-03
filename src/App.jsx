import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Caed from "./components/enlaces/Caed";

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      {/* <Route path="/body" element={<Body />} /> */}
      <Route path="/caed" element={<Caed />} />
    </Routes>
    {/* <Body/> */}
    </Router>
  )
}

export default App
