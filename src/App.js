import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { styles } from './Pages/Style';

import FormPage from "./Pages/FormPage";
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <h1> Front End Team </h1>
      <Router>
      <div>
          <li style={styles.liStyle}>
            <Link style={styles.links} to="/">Home</Link>
          </li>
          <li style={styles.liStyle}>
            <Link style={styles.links} to="/form">Register</Link>
          </li>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
