import Catalog from "./components/Catalog/Catalog";
import NavBar from "./components/Navbar/NavBar";
import Single from "./components/Single/Single";
import Write from "./components/Write/Write";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route path="/register">{user ? <Catalog /> : <Register />}</Route>
        <Route path="/login">{user ? <Catalog /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
