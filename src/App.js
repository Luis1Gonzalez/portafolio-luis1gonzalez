import './App.css';
import Home from './pages/home';
import Header from './shared/header';
import Menu from './shared/manu';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Menu />
      <Home />
      </>
    </div>
  );
}

export default App;
