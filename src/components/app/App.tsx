import Authorization from "../authorization/authorization";
import Contacts from "../contacts/contacts";
import { Router, Route, Switch } from 'react-router';
import { AppRoute } from "../../consts/consts";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";

function App() {
  return (
    <Router history={browserHistory}>
      <Switch >
        <Route exact path={AppRoute.Login}>
          <Authorization />
        </Route>
        <PrivateRoute exact path={AppRoute.Main} render={() => <Contacts />}>

        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
