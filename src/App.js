import "./App.css";
import Home from "./pages/home";
import Header from "./shared/header";
import Menu from "./shared/manu";
import Details from "./pages/details";
import Me from "./pages/me";
import MobileLink from "./pages/mobileLink";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from  "./themes.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const StyledApp = styled.div`
color:${(props) => props.theme.fontColor};
`;

function App() {

  const [t, i18n] = useTranslation("global");
  const [isChecked, setIsChecked] = useState(true);
  const [colorS, setColorS] = useState("#444");
  const [titleLanguage, setTitleLanguage] = useState("English");


  const handleOnChange = () => {
    setIsChecked(!isChecked);

    if(colorS === "#444"){ 
      setColorS("yellow")
    }else{ 
      setColorS("#444")
    }
  };


  return (
    <div className="App w-100">

<div className="header__options col-12 d-flex justify-content-end align-items-center pe-3">
        <div className="options d-flex align-items-center">
          <div className="option__theme" onClick={handleOnChange} style={{ backgroundColor: `${colorS}`}}></div>
         
          <div className="option_lenguage d-flex align-items-center" onClick={() => i18n.language==="en" ? i18n.changeLanguage("es") && setTitleLanguage("English") : i18n.changeLanguage("en") && setTitleLanguage("Castellano")}>{titleLanguage}</div>

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
          <Route path="/me" element={<Me />}></Route>
          <Route path="/mobileLink" element={<MobileLink />}></Route>
        </Routes>

        </StyledApp>
    </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
