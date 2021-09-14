import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerList from "../components/CustomerList/CustomerList";
import CustomerDetail from "../components/CustomerDetail/CustomerDetail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CustomerList} />
        <Route exact path="/customer/:email" component={CustomerDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
