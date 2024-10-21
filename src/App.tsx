import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { UserReducerInitialState } from "./types/reducerType";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { getUser } from "./redux/api/userAPI";
import { userExist, userNotExist } from "./redux/reducers/userReducer";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/loader";

const Login = lazy(() => import("./page/Login"));
const ChatPage = lazy(() => import("./page/ChatPage"));

const App = () => {
  const { user, loading } = useSelector(
    (state: { userReducer: UserReducerInitialState }) => state.userReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUser(user.uid);
        dispatch(userExist(data.user));
      } else {
        dispatch(userNotExist());
      }
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* not logged in route */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={user ? false : true}
                redirect="/chats"
              >
                <Login />
              </ProtectedRoute>
            }
          />

          {/* loggedIN user routes */}
          <Route
            element={<ProtectedRoute isAuthenticated={user ? true : false} />}
          >
            <Route path="/chats" element={<ChatPage user={user} />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" closeButton />
    </Router>
  );
};

export default App;
