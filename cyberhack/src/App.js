import "./App.css";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/PrivateRoute";

// Pages
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Charities from "./component/Charities";
import Research from "./component/Research";
import Blog from "./component/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Volunteers from "./component/Volunteers";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Crud
//import Navbar from "./component/common/Navbar";
import CrudAdd from "./component/cruds/CrudAdd";
import CrudTable from "./component/cruds/CrudTable";
import CrudListView from "./component/cruds/CrudListView";
import CrudGridView from "./component/cruds/CrudGridView";
import CrudDetails from "./component/cruds/CrudDetails";
import CrudEdit from "./component/cruds/CrudEdit";
import CrudDelete from "./component/cruds/CrudDelete";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/UserDashboard" element={<PrivateRoute component={UserDashboard} />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        <Route path="/research" element={<Research />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route exact path="/api/" element={<Blog />} />
				<Route path="/cruds" element={<CrudTable />} />					
				<Route path="/cruds/list-view" element={<CrudListView />} />
				<Route path="/cruds/grid-view" element={<CrudGridView />} />
				<Route path="/cruds/new" element={<CrudAdd />} />
				<Route path="/cruds/:_id" element={<CrudDetails />} />
				<Route path="/cruds/:_id/edit" element={<CrudEdit />} />
				<Route path="/cruds/:_id/delete" element={<CrudDelete />} />

        <Route path="*" element={<div>Page Not Found!</div>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;


/*
import "./App.css";
import React from "react";
// import { Button } from "react-bootstrap"; // newly added
// import { useNavigate } from "react-router-dom" // newly added
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cloneElement } from 'react';
import PrivateRoute from "./component/PrivateRoute";

// Pages
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Charities from "./component/Charities";
import Research from "./component/Research";
import Blog from "./component/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Volunteers from "./component/Volunteers";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Crud
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/common/Navbar";
// import Home from "./component/pages/Home";
import CrudAdd from "./component/cruds/CrudAdd";
import CrudTable from "./component/cruds/CrudTable";
import CrudListView from "./component/cruds/CrudListView";
import CrudGridView from "./component/cruds/CrudGridView";
import CrudDetails from "./component/cruds/CrudDetails";
import CrudEdit from "./component/cruds/CrudEdit";
import CrudDelete from "./component/cruds/CrudDelete";
// import Footer from "./component/common/Footer";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/UserDashboard" element={<PrivateRoute />}>
          <Route exact path="/UserDashboard" element={<UserDashboard />} />
        </Route>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        <Route path="/research" element={<Research />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route exact path="/api/" element={<Blog />} />
				<Route path="/cruds" element={<CrudTable />} />					
				<Route path="/cruds/list-view" element={<CrudListView />} />
				<Route path="/cruds/grid-view" element={<CrudGridView />} />
				<Route path="/cruds/new" element={<CrudAdd />} />
				<Route path="/cruds/:_id" element={<CrudDetails />} />
				<Route path="/cruds/:_id/edit" element={<CrudEdit />} />
				<Route path="/cruds/:_id/delete" element={<CrudDelete />} />

        
        <Route path="*" element={<div>Page Not Found!</div>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;

*/
