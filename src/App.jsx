import "./App.css";
import "./Styles/styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AuthPage from "@pages/Auth/authPage";
import AdminAuth from "@pages/Auth/adminAuth";
import Login from "@components/Auth/login";
import Signup from "@components/Auth/signup";
import ForgotPassword from "@components/Auth/forgotPassword";
import Pannel from "@pages/User/pannel";
import DefaultScreen from "@components/Userspannel/Main/DefaultScreen";
import Setting from "@components/Userspannel/Main/Settings";
import Account from "@components/Userspannel/Main/Settings/account";
import Password from "@components/Userspannel/Main/Settings/password";
import Companies from "@components/Userspannel/Main/Companies/main";
import AddNew from "@components/Userspannel/Main/Companies/addNew";
import Edit from "@components/Userspannel/Main/Companies/edit";
import AdminPannel from "@pages/Admin/pannel";
import AdminDashboard from "@components/Adminpannel/Main/Dashboard";
import Users from "@components/Adminpannel/Main/Users";
// import Dashboards from "@components/Userspannel/Main/Dashboards";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/signup" />,
    },
    {
      path: "/",
      element: <AuthPage />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgotpassword", element: <ForgotPassword /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminAuth />,
    },
    {
      path: "/user-pannel",
      element: <Pannel />,
      children: [
        {
          path: "",
          element: <DefaultScreen />,
        },
        { path: "settings", element: <Navigate to="account" /> },

        {
          path: "settings",
          element: <Setting />,
          children: [
            { path: "account", element: <Account /> },
            { path: "password", element: <Password /> },
          ],
        },

        {
          path: "companies",
          element: <Companies />,
          // children: [{ path: "add_new", element: <AddNew /> }],
        },
        { path: "companies/add_new", element: <AddNew /> },
        { path: "companies/edit", element: <Edit /> },
        { path: "dashboard", element: <h1>Under Construction</h1> },
      ],
    },
    {
      path: "/admin-pannel",
      element: <Navigate to="/admin-pannel/dashboard" />,
    },
    {
      path: "/admin-pannel",
      element: <AdminPannel />,
      children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "users", element: <Users /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
