import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainArea from "../MainArea/MainArea";
import "./style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainAreaDev from "../MainAreaDev/MainAreaDev";

const MainContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="mainContainer">
        <Sidebar isOpen={sidebarOpen} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainArea setSidebarOpen={setSidebarOpen} isOpen={sidebarOpen} />
            }
          ></Route>
          <Route
            exact
            path="/marketing"
            element={
              <MainAreaDev
                setSidebarOpen={setSidebarOpen}
                isOpen={sidebarOpen}
              />
            }
          ></Route>
          <Route
            exact
            path="/dev"
            element={
              <MainAreaDev
                setSidebarOpen={setSidebarOpen}
                isOpen={sidebarOpen}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default MainContainer;
