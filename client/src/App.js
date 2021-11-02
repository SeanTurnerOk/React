import './App.css';

import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom";
import Login from "./views/Login.js"
function App() {
  let history=useHistory()
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login history={history}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
