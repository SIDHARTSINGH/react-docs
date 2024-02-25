import { useParams, useNavigate, useLocation } from "react-router-dom";
import authService from "../appwrite/authService";
import { ID } from "appwrite";

const UserHome = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("params", params);

  const handleNewDoc = async () => {
    if (params.user_id != null) {
      authService.databases
        .createDocument(
          import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID,
          ID.unique(),
          {
            userId: params.user_id,
            data: "",
            content: `{"ops":[{"attributes":{"color":"#0047b2"},"insert":"Initial Content"}]}`,
          }
        )
        .then((res) => {
          console.log(`New Doc: ${location.pathname}/doc/${res.$id}`);
          navigate(`${location.pathname}/doc/${res.$id}`);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <div className="m-5">
        <div className="w-full bg-sky-800 p-2 mb-5 rounded-lg">UserHome</div>
        <button className="btn btn-outline btn-primary" onClick={handleNewDoc}>
          + New Doc
        </button>
      </div>
    </>
  );
};

export default UserHome;
