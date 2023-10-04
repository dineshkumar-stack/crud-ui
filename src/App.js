import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { useState } from "react";
import NavBar from "./components/NavBar";

const users = [
  {
    name: "User One",
    email: "User@demo.com",
    pic: "https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg",
    id: "1",
  },
  {
    name: "User Two",
    email: "User@demo.com",
    pic: "https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg",
    id: "2",
  },
  {
    name: "User Three",
    email: "User@demo.com",
    pic: "https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg",
    id: "3",
  },
  {
    name: "User Four",
    email: "User@demo.com",
    pic: "https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg",
    id: "4",
  },
  {
    name: "User Five",
    email: "User@demo.com",
    pic: "https://icon-library.com/images/profile-picture-icon/profile-picture-icon-0.jpg",
    id: "5",
  },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home
              users={userList}
              userList={userList}
              setUserList={setUserList}
            />
          </Route>
          <Route path="/adduser">
            <AddUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/edit/:id">
            <EditUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/profile/:id">
            <Profile userList={userList} />
          </Route>
          <Route path="/editprofile/:id">
            <EditProfile userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="**" exact>
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
