import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Chathistory from "./pages/chatHistory";
import Chat from "./pages/chat";
import AllCampaigns from "./pages/allCampaigns";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/adtask-Website" element={<Home />} />
        <Route path="/adtask-Website/register" element={<Register />} />
        <Route path="/adtask-Website/login" element={<Login />} />
        <Route path="/adtask-Website/chat-history" element={<Chathistory />} />
        <Route path="/adtask-Website/chat" element={<Chat />} />
        <Route
          path="/adtask-Website/all-campaigns"
          element={<AllCampaigns />}
        />
      </Routes>
    </Router>
  );
}

export default App;
