import Introduction from "./components/Introduction.js";
import AboutMe from "./components/AboutMe.js";
import './Home.css';
function Home(){
  
  return (
  	<div>
    <Introduction className="Introduction" />
    <AboutMe className="AboutMe"/>
    </div>
  );
}

export default Home;
