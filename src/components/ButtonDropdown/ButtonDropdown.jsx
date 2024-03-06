// ButtonDropdown.js
import React, { useState } from "react";
import "./style.css";

const ButtonDropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="button-dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonDropdown;
