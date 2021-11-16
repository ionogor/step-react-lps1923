import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

const SearchBar = ({ filterPostsByUser }) => {
  /// useState - functie din React , care se mai numeste Hook.

  const [inputVal, setInputVal] = useState("");
  console.log("inputVal: ", inputVal);

  const handleInputChange = (event) => {
    //console.log("event:", event);
    setInputVal(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    filterPostsByUser(inputVal);
    setInputVal("");
  };

  return (
    <div className="search-bar-wrapper">
      <div className="social ">
        <FontAwesomeIcon icon={faInstagram} className="logo-image" />
      </div>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={inputVal}
          onChange={handleInputChange}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
