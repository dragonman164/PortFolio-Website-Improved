import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import SideNav from './components/SideNav';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
   
   <SideNav/>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
   <FloatingActionButton/>
   <Footer/>
    </div>
  );
}

export default App;
