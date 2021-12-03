import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./views/Login.js";
import Home from './views/Home';
import AddItems from "./views/AddItems"
import UserProfile from './components/LoggedInUser';
import Recipes from './views/Recipes';
function App() {
  //adding userProfile to cookies
  var userProfile=new UserProfile()
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login userProfile={userProfile}/>
          </Route>
          <Route exact path="/home">
            <Home userProfile={userProfile}/>
          </Route>
          <Route exact path="/addItems">
            <AddItems userProfile={userProfile}/>
          </Route>
          <Route exact path="/recipes">
            <Recipes userProfile={userProfile}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
