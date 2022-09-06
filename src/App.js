import "./App.css";
import Home from "./pages/home";
import Header from "./shared/header";
import Menu from "./shared/manu";
import Details from "./pages/details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from  "./themes.js";
import { useState } from "react";

const StyledApp = styled.div`
color:${(props) => props.theme.fontColor};
`;

function App() {

  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const themeToggler = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="App w-100">

<div className="header__options col-12 d-flex justify-content-end align-items-center pe-2">
        <div className="options d-flex align-items-center">
          <div className="option__theme" onClick={handleOnChange}></div>
          <div className="option_lenguage d-flex align-items-center">
            English
          </div>
        </div>
      </div>

      <BrowserRouter>
    <ThemeProvider theme={isChecked ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
      
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project/:title" element={<Details />}></Route>
        </Routes>

        </StyledApp>
    </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
