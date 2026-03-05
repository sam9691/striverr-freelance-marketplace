import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="content">
          <h1>
            Discover Top <span>Freelance Talent</span> for Every Project
          </h1>
          <p className="subtitle">
            Connect with skilled professionals and bring your ideas to life
          </p>
          <div className="popular">
            <span>Trending:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="searchSection">
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='What service are you looking for?'
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
