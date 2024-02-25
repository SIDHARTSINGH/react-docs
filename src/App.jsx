import { useState } from "react";
import authService from "./appwrite/authService";
import { Link } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUserOnLoad = async () => {
  //     try {
  //       const account = await authService.getCurrentUser();
  //       setUser(account);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   // getUserOnLoad();
  //   // setLoading(false);
  // }, []);

  const checkOrCreateSession = async () => {
    try {
      const session = await authService.account.get("current");
      console.log("current session", session);
      setUser(session.$id);

      return;
    } catch (err) {
      console.error("No Session found", err);
    }

    // const jsonString = localStorage.getItem("cookieFallback");
    if (user) {
      // const sessionData = JSON.parse(jsonString);
      // const firstKey = Object.keys(sessionData)[0];
      // const sessionId = sessionData[firstKey];
      // console.log("sessionId", sessionId);

      console.log("User", user);
    } else {
      console.log("No User logged in");

      try {
        console.log("Logging In");
        const session = await authService.login({
          email: "test@test.com",
          password: "password",
        });
        console.log("Logged In", session);
        setUser(session.$id);
      } catch (error) {
        console.error("Error creating account:", error.message);
      }
    }
    // await setUser() for logging the user variable
    // console.log("AuthUser", user);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/login"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
