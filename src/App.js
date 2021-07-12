import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./auth/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() =><Homepage />}/>
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default App;
