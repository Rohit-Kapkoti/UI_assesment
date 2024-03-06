import React, { useState } from "react";
import "./style.css";
import {
  FaDesktop,
  FaPen,
  FaUsers,
  FaFolder,
  FaPlus,
  FaQuestionCircle,
  FaCreativeCommons,
  FaRegPlusSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const [openFolders, setOpenFolders] = useState([]);

  const toggleFolder = (folder) => {
    if (openFolders.includes(folder)) {
      setOpenFolders(openFolders.filter((item) => item !== folder));
    } else {
      setOpenFolders([...openFolders, folder]);
    }
  };

  const isFolderOpen = (folder) => {
    return openFolders.includes(folder);
  };

  return (
    <aside className={`sidebar ${isOpen ? "active" : "notActive"}`}>
      <div>
        {/* User and logo details */}
        <header className="sidebarHeader">
          <div className="business-details">
            <div className="logo">
              <img
                className="logoImg"
                src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1709715408~exp=1709716008~hmac=ffe8aed1434b00f3bd54aa2e77cdb0b12b9811a8afb485ed891f9aaabdc02824"
                alt="hello logo"
              />
            </div>
            <div className="business-info">
              <div>INC</div>
              <div>InnvovatedHUb</div>
            </div>
          </div>
          <div className="user">
            <img
              className="userImg"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
            />
          </div>
        </header>

        {/* Navigation rows */}
        <nav className="navigation-rows">
          <Link to="/">
            <div className="navigation-row">
              <FaDesktop className="icon" /> Design{" "}
              <span className="team-number">5</span>
            </div>
          </Link>
          <Link to="/marketing">
            {" "}
            <div className="navigation-row">
              <FaPen className="icon" /> Marketing{" "}
              <span className="team-number">7</span>
            </div>
          </Link>
          <Link to="/dev">
            <div className="navigation-row">
              <FaUsers className="icon" /> Development{" "}
              <span className="team-number">10</span>
            </div>
          </Link>
          <div className="create-team">
            <span>
              <FaRegPlusSquare />
            </span>
            <span>Create a team</span>
          </div>
        </nav>

        {/* Menu items */}
        <nav className="navigation">
          <div className="header">
            <span>Folders</span>
            <FaPlus className="add-folder-icon" />
          </div>
          <ul className="folders">
            <li className={`folder ${isFolderOpen("products") ? "open" : ""}`}>
              <div
                className="folder-header"
                onClick={() => toggleFolder("products")}
              >
                <FaFolder className="folder-icon" />
                Products
              </div>
              <ul className="subfolders">
                <li className="subfolder">Roadmap</li>
                <li className="subfolder">Feedback</li>
                <li className="subfolder">Performance</li>
                <div className="create-team">
                  <span>
                    <FaRegPlusSquare />
                  </span>
                  <span>Add new sub</span>
                </div>
              </ul>
            </li>
            <li className={`folder ${isFolderOpen("sales") ? "open" : ""}`}>
              <div
                className="folder-header"
                onClick={() => toggleFolder("sales")}
              >
                <FaFolder className="folder-icon" />
                Sales
              </div>
              <ul className="subfolders">
                <li className="subfolder">Monthly Report</li>
                <li className="subfolder">Quarterly Report</li>
                <li className="subfolder">Annual Report</li>
                <div className="create-team">
                  <span>
                    <FaRegPlusSquare />
                  </span>
                  <span>Add new sub</span>
                </div>
              </ul>
            </li>
            <li className={`folder ${isFolderOpen("design") ? "open" : ""}`}>
              <div
                className="folder-header"
                onClick={() => toggleFolder("design")}
              >
                <FaFolder className="folder-icon" />
                Design
              </div>
              <ul className="subfolders">
                <li className="subfolder">UI/UX</li>
                <li className="subfolder">Graphic Design</li>
                <li className="subfolder">Web Design</li>
                <div className="create-team">
                  <span>
                    <FaRegPlusSquare />
                  </span>
                  <span>Add new sub</span>
                </div>
              </ul>
            </li>
            <li className={`folder ${isFolderOpen("office") ? "open" : ""}`}>
              <div
                className="folder-header"
                onClick={() => toggleFolder("office")}
              >
                <FaFolder className="folder-icon" />
                Office
              </div>
              <ul className="subfolders">
                <li className="subfolder">Meetings</li>
                <li className="subfolder">Events</li>
                <li className="subfolder">Facilities</li>
                <div className="create-team">
                  <span>
                    <FaRegPlusSquare />
                  </span>
                  <span>Add new sub</span>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <FaUsers className="footer-icon" />
          <span className="footer-text">Invite Teammates</span>
        </div>
        <div className="footer-section">
          <FaQuestionCircle className="footer-icon" />
          <span className="footer-text">Help & First Steps</span>
        </div>
        <div className="footer-section trial-section">
          <span className="trial-text">7 days left trial</span>
          <button className="billing-button">Add Billing</button>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
