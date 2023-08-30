import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a>
                <img src="https://tsmshop.com/cdn/shop/files/TSM-LOGO-SITE-HEADER_1_140x.png?v=1625185344" />
              </a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <div>Footer</div>
      </div>
    </Router>
  );
}


