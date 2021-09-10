import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <UserList />
          </Route>
          <Route path='/user/:userId' exact>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
