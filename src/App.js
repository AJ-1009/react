import Nav from './js/nav'
import About from './js/About'
import Home from './js/home'
import Contact from './js/contact'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default function App() {
  return (
   <Router>
    <Nav/>
    <Routes>
          <Route path="/about" element ={<About/>} />
          <Route path="/" element ={<Home/>} />
          <Route path="/contact" element ={<Contact/>} />
    </Routes>
   </Router>
  );
}

