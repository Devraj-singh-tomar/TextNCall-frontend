import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";

const Login = lazy(() => import("./page/Login"));
const ChatPage = lazy(() => import("./page/ChatPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={"loading..."}>
        <Routes>
          {/* not logged in route */}
          <Route path="/" element={<Login />} />

          {/* loggedIN user routes */}
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" closeButton />
    </Router>
  );
};

export default App;
