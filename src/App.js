import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user}=useAuthContext()
  return (
    <div className="font-poppins m-0 bg-gray-100">
      <Router>
        <Navbar/>
        <div className="max-w-screen-2xl p-20 mx-0 my-auto">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home/> : <Navigate to = "/login"/>}
            />
            <Route 
              path="/login"
              element={!user ? <Login/> : <Navigate to = "/" />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup/> : <Navigate to = "/" /> }
            />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
