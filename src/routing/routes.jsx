import { createBrowserRouter } from "react-router-dom";
import TextEditor from "../components/TextEditor";
import UserHome from "../components/UserHome";
import Layout from "../Layout";
import App from "../App";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "user/:user_id", element: <UserHome /> },
      { path: "user/:user_id/doc/:doc_id", element: <TextEditor /> },
    ],
  },
]);

export default router;
