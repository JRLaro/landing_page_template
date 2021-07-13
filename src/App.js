import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./auth/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() =><Homepage />}/>
        <Route path="/login" render={() => <LoginPage />} />
      </Switch>
    </Router>
  );
}

export default App;
