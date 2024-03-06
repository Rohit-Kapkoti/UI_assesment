import React, { useState } from "react";
import "./style.css";
import BrandTable from "../BrandTable/BrandTable";

import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
import { FaSearch, FaComments, FaCog, FaCaretDown } from "react-icons/fa";
import {
  MdDeleteOutline,
  MdOutlineArchive,
  MdOutlineClose,
} from "react-icons/md";
import { devData } from "./devData";

const MainAreaDev = ({ isOpen, setSidebarOpen }) => {
  const [filteredBrands, setFilteredBrands] = useState(devData);
  const [sortedField, setSortedField] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isOpen);
  };

  const handleFilter = (filterValue) => {
    let filteredData = devData;
    if (filterValue === "Desk") {
      filteredData = filteredData.filter(
        (brand) => brand.desk === "YourDeskName"
      );
    } else if (filterValue === "Tags") {
      filteredData = filteredData.filter((brand) =>
        brand.tags.includes("YourTagName")
      );
    }
    setFilteredBrands(filteredData);
  };

  const handleSort = (sortField) => {
    let sortedData = [...filteredBrands];
    if (sortField === "Name") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortField === "Next Meeting") {
      sortedData.sort(
        (a, b) => new Date(a.nextMeeting) - new Date(b.nextMeeting)
      );
    }
    setSortedField(sortField);
    setFilteredBrands(sortedData);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = devData.filter((brand) =>
      brand.name.toLowerCase().includes(query)
    );
    setFilteredBrands(filteredData);
  };

  return (
    <main className="mainArea">
      <header className="mainAreaheader">
        <h2 className="header-title">Products</h2>
        <div className="serachIconContainer">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search for..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="icon-container">
            <div className="header-button">
              <FaComments />
            </div>
            <div className="header-button">
              <FaCog />
            </div>
            <div className="hamburger-menu header-button">
              <button className="hamburger-menu" onClick={toggleSidebar}>
                &#9776;
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="main-section">
        <div className="buttonsBar">
          <div className="buttons">
            {/* Filter button */}
            <ButtonDropdown
              label="Filter"
              options={["All Brands", "Desk", "Tags"]}
              onSelect={handleFilter}
            />
            {/* Sort button */}
            <ButtonDropdown
              label="Sort"
              options={["Name", "Next Meeting"]}
              onSelect={handleSort}
            />
          </div>
          <div className="buttons">
            {/* Filter button */}
            <ButtonDropdown
              label="Filter"
              options={["All Brands", "Desk", "Tags"]}
              onSelect={handleFilter}
            />
            {/* Sort button */}
            <ButtonDropdown
              label="Sort"
              options={["Name", "Next Meeting"]}
              onSelect={handleSort}
            />
          </div>
        </div>
        <BrandTable brands={filteredBrands} />
      </section>
      <footer className="footer">
        <div className="button-container">
          <div className="button-selected">
            <span>3</span> Selected
          </div>
          <button className="footer-button">
            <span>
              <MdOutlineArchive />
            </span>
            Archive
          </button>
          <button className="footer-button">
            <span>
              <MdDeleteOutline color="red" size={16} />
            </span>
            Delete
          </button>
          <button className="footer-button">
            {" "}
            More
            <span>
              {" "}
              <FaCaretDown size={16} />
            </span>
          </button>
          <button className="button-selected">
            <MdOutlineClose size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
};

export default MainAreaDev;
