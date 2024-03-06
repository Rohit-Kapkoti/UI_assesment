import React, { useState } from "react";
import { FaUser, FaComment, FaCalendarAlt, FaPlus } from "react-icons/fa";
import "./style.css";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const BrandTable = ({ brands }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === brands.length) {
      // Deselect all if all are selected
      setSelectedItems([]);
    } else {
      // Select all
      setSelectedItems(brands.map((brand) => brand.id));
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      // Deselect item if already selected
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      // Select item if not already selected
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <table className="brand-table">
      <thead>
        <tr>
          <th className="brands">
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedItems.length === brands.length}
              onChange={toggleSelectAll}
            />
            Brands
          </th>
          <th>Description</th>
          <th>Members</th>
          <th>Categories</th>
          <th>Tags</th>
          <th>Next Meeting</th>
          <th>
            <FaPlus className="add-icon" />
          </th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brand) => (
          <tr key={brand.id}>
            <td>
              <div className="brand-info">
                <div className="brand-info-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedItems.includes(brand.id)}
                    onChange={() => toggleSelectItem(brand.id)}
                  />
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo"
                  />
                  <span className="brand-name">{brand.name}</span>
                </div>
                <div className="messages">
                  <HiOutlineChatBubbleLeftRight /> {brand.messages.length}
                </div>
              </div>
            </td>
            <td className="description">{brand.description}</td>
            <td>
              <div className="team-members">
                {brand.teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="member-photo"
                    />
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="categories">
                {brand.categories.map((category, index) => (
                  <div className="category" key={index}>
                    {category}
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="tags">
                {brand.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="meeting">{brand.nextMeeting}</div>
            </td>
            <td></td>
          </tr>
        ))}
        <tr>
          <td colSpan="7">Selected: {selectedItems.length} items</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BrandTable;
