import "./App.css";
import Home from "./pages/home";
import Header from "./shared/header";
import Menu from "./shared/manu";
import Details from "./pages/details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-100">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project/:title" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
