import React from 'react';
import { link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/customers">Customers</Link> <br></br>
        <Link to="/customers/30242306">Customer 30242306</Link>
      </div>
    </Router>
  );
}

export default App;
