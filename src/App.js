import "./App.css";
import Home from "./home/Home";
import Homepage from "./Homepage";
// import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser?.uid,
            username: authUser?.displayName,
            email: authUser?.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });

    return () => {
      // Cleanup function to unsubscribe when the component unmounts
      unsubscribe();
    };

    // Add dispatch to the dependency array
  }, [dispatch]);

  const user = useSelector((state) => state?.data?.user?.user);
  const isLoading = useSelector((state) => state?.data?.user?.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Home />}</>
      )}
    </div>
  );
}

export default App;