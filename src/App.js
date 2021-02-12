import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Views/Home/homepage";
import About from "./Views/About/About";
import Discover from "./Views/Discover/Discover";
import Search from "./Views/Search/Search";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/search" component={Search}/>
      </Router>
    </div>
  );
}
export default App;