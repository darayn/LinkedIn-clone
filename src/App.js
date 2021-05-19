import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Home from './components/Home';

import Header from './components/Header';

// testing Comment for git
function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route path='/home'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;


// video checkpoint : 1:16:02