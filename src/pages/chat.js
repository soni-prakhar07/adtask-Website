import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [threadId, setThreadId] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  //bootstrap
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  //chat initialization
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          setError("User not authenticated.");
          return;
        }

        const response = await fetch("https://dev.adtask.ai/api/init-chat", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error("Failed to initialize chat.");
        }

        const data = await response.json();
        setThreadId(data.thread_id);
      } catch (err) {
        setError(err.message);
      }
    };

    initializeChat();
  }, []);

  //chatting (sending message)
  const sendMessage = async () => {
    if (!message.trim()) {
      setError("Message cannot be empty");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("User not authenticated.");
        return;
      }

      const response = await fetch("https://dev.adtask.ai/api/chat", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const data = await response.json();
      setChatHistory([...chatHistory, { user: message, bot: data.message }]);
      setMessage("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClick = () => {
    navigate("/all-campaigns");
  };

  const createCampaign = async () => {
    setError("");
    setSuccess("");

    if (!threadId) {
      setError("Chat thread is not initialized.");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("User not authenticated.");
        return;
      }

      const response = await fetch(
        `https://dev.adtask.ai/api/create-campaign?thread_id=${threadId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        if (
          errorData.detail ===
          "'AdsAssistantManager' object has no attribute 'get_stored_campaign_data'"
        ) {
          throw new Error("There is no Campaign data stored in the database.");
        } else {
          throw new Error(errorData.detail || "Failed to create campaign.");
        }
      }

      setSuccess("Campaign created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4 text-white">
      <button
        type="button"
        class="btn btn-primary"
        onClick={handleClick}
        style={{ position: "absolute", right: "120px" }}
      >
        View All Campaigns
      </button>

      <h2>Chat Initialization</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="card p-3 shadow-lg bg-dark text-white">
        {threadId ? (
          <p>Chat Thread ID: {threadId}</p>
        ) : (
          <p>Initializing chat...</p>
        )}
      </div>

      <div className="mt-3 card p-3 shadow-lg bg-dark text-white">
        <h3>Chat</h3>
        <div className="chat-box">
          {chatHistory.length === 0 ? (
            <p>No Chat History</p>
          ) : (
            <ul>
              {chatHistory.map((msg, index) => (
                <li key={index}>
                  <strong>You:</strong> {msg.user} <br />
                  <strong>Bot:</strong> {msg.bot}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-3 text-white">
          <input
            type="text"
            className="form-control bg-dark text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary mt-2" onClick={sendMessage}>
            Send
          </button>
        </div>
        <button
          type="button"
          class="btn btn-primary my-2"
          onClick={createCampaign}
        >
          Create Campaign
        </button>
      </div>
    </div>
  );
}
