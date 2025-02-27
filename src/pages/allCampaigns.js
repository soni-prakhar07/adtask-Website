import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllCampaigns() {
  const [error, setError] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchCampaigns = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("User not authenticated.");
        return;
      }
      const response = await fetch("https://dev.adtask.ai/api/campaigns", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch campaigns.");
      }
      const data = await response.json();
      setCampaigns(data.campaigns);
    };
    fetchCampaigns();
  }, []);

  //check health
  const checkHealth = async () => {
    const healthResponse = await fetch("https://dev.adtask.ai/health", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await healthResponse.json();

    if (healthResponse.ok) {
      alert(data.status);
    }
  };

  const handleClick = () => {
    navigate("/adtask-Website/chat");
  };

  return (
    <div className="container mt-4 text-white">
      <button type="button" class="btn btn-primary" onClick={checkHealth}>
        Check Health
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={handleClick}
        style={{ position: "absolute", right: "120px" }}
      >
        Chat
      </button>

      <h2>All Campaigns</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card p-3 shadow-lg bg-dark">
        {campaigns.length === 0 ? (
          <p style={{ color: "white" }}>No Campaigns</p>
        ) : (
          <ul>
            {campaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
