import React, { useEffect, useState } from "react";

export default function Chathistory() {
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState("");

  //bootstrap
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when unmounting
    };
  }, []);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) {
          setError("User not authenticated.");
          return;
        }

        const response = await fetch("https://dev.adtask.ai/api/chat-history", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch chat history.");
        }

        const data = await response.json();
        setChatHistory(data.messages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChatHistory();
  }, []);

  return (
    <div className="container mt-4 text-white">
      {" "}
      <h2>Chat History</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card p-3 shadow-lg bg-dark">
        {" "}
        {chatHistory.length === 0 ? (
          <p style={{ color: "white" }}>No Chat History</p>
        ) : (
          <ul>
            {chatHistory.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
