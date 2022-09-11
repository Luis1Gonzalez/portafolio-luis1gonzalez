import "./style.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import Keyboard from "./../../components/keyboard"


const Home = () => {

   return (
    <div className="wrap__home">

<About />
<Projects />
        <Keyboard />
</div>
  );
};

export default Home;
