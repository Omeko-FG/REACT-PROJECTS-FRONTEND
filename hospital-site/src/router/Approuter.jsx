import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Appointments from "../pages/Appointments";
import CreateAppointments from "../pages/CreateAppointments";
import Advice from "../pages/Advice";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route /*path="hospital" element={<PrivateRouter />}*/>
          <Route path="appointments" element={<Appointments />} />
          <Route path="createappointments" element={<CreateAppointments />} />
          <Route path="advice" element={<Advice />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
