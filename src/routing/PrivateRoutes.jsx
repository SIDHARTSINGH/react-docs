import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";
import Layout from "../Layout";

const PrivateRoutes = () => {
  const { user } = useAuthStore();
  if (user == null) return <Navigate to={"/login"} />;

  return <Layout />;
};

export default PrivateRoutes;
