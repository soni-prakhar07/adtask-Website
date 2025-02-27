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
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat-history" element={<Chathistory />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/all-campaigns" element={<AllCampaigns />} />
      </Routes>
    </Router>
  );
}

export default App;
