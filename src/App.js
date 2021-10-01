import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Inbox from './Component/Inbox/Inbox';
import Nopage from './Component/Nopage/Nopage';
import UserDetails from './Component/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav-Btn">
          <li>
            <Link className="list-item" to="/home">Home</Link>
          </li>
          <li>
            <Link className="list-item" to="/about">About</Link>
          </li>
          <li>
            <Link className="list-item" to="/inbox">Inbox</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/user/:userId">
            <UserDetails></UserDetails>
          </Route>
          <Route path="/inbox">
            <Inbox></Inbox>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Nopage></Nopage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
