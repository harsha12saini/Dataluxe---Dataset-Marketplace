import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwriteConfig";
import axios from "axios";
import { FaPlus, FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.error("User not authenticated:", error);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/datasets?page=${page}&search=${search}`
        );
        setDatasets(response.data.datasets);
      } catch (error) {
        console.error("Error fetching datasets:", error);
      }
    };
    fetchDatasets();
  }, [page, search]);

  return (
    <div className="dashboard-container">
      {/* Main Navbar */}
      <Navbar />

      {/* Second Fixed Navbar */}
      <div className="toolbar">
        <h1 className="title">All Datasets</h1>
        <div className="toolbar-controls">
          <select className="dropdown">
            <option>Recent</option>
            <option>Popular</option>
          </select>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tags"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
          <button className="add-button">
            <FaPlus className="plus-icon" />
            Add Dataset
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="content">
        {/* Dataset List */}
        <div className="dataset-list">
          {datasets.length === 0 ? (
            <p className="no-datasets">No datasets found</p>
          ) : (
            <ul className="dataset-items">
              {datasets.map((dataset) => (
                <li key={dataset.id} className="dataset-card">
                  <h3 className="dataset-title">{dataset.name}</h3>
                  <p className="dataset-description">{dataset.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className={`pagination-button ${page === 1 ? "disabled" : ""}`}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="page-number">Page {page}</span>
          <button className="pagination-button" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;