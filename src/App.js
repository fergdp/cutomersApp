import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerListContainer = () => <h1>Customers List Container</h1>;

  renderNewcustomerContainer = () => <h1>New customer container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderNewcustomerContainer} />
            <Route path="/customers/:dni" component={CustomerContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
