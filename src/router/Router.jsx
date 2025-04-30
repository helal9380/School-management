/** @format */

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Layout from "../layout/Layout";
import FeeManagement from "../pages/Dashbaord/FeeManagement";
import ManageTeachers from "../pages/Dashbaord/ManageTeacher/ManageTeachers";
import Overview from "../pages/Dashbaord/OverView/OverView";
import Settings from "../pages/Dashbaord/Setting/Settings";
import About from "../pages/home/About";
import Home from "../pages/home/Home";
import Services from "../pages/home/Services";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Students from "../pages/students/Students";
import Teachers from "../pages/Teachers/Teachers";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      // {
      //   path: "/students",
      //   element: <Students />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "fees",
        element: <FeeManagement />,
      },
      {
        path: "teachers",
        element: <ManageTeachers />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default Router;
