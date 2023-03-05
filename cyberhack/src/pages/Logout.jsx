// Logout.js
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Logout = ({ history }) => {
  axios
    .get("/api/logout")
    .then((result) => {
      toast.success("Log out successfully");
      localStorage.removeItem("token");
      history.push("/");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  return <Navigate to="/signin" />;
};

export default Logout;

