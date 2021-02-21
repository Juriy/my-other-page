import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/my-other-page">
      <div className="App">
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>

        <Route exact path="/">
          <h2>Home</h2>
        </Route>
        <Route path="/about">
          <h2>About</h2>
        </Route>
      </div>
    </Router>
  );
}

export default App;
