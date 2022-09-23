import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import Footer from "./components/Footer/Footer";

//PAGES
import HomePage from "./pages/HomePage";
import ContactList from "./pages/ContactList";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import ContactDetail from "./pages/ContactDetail";


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      navigate("/")
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
        <Routes>
            {routes({ user, authenticate, handleLogout }).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/" element={<HomePage/>}/>
          <Route path="/newcontact" element={<NewContact user={user}/>}/>
          <Route path="/contactlist" element={<ContactList/>}/>
          <Route path="/contactlist/:contactId" element={<ContactDetail/>}/>
          <Route path="/contactlist/edit/:contactId" element={<EditContact/>}/>

          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/reset/:id" element={<Reset/>}/>
        </Routes>
      <Footer/>      
    </div>
  );
}
