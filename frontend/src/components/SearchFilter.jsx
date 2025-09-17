import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMapMarkerAlt,
  faBriefcase,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import '../css/SearchFilter.css'

const SearchFilter = () => {
  return (
    <div className="filter-bar-container">
      {/* 1. Search Bar */}
      <div className="filter-item search-bar">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="text" placeholder="Search By Job Title, Role" />
      </div>

      <div className="divider"></div>

      {/* 2. Preferred Location */}
      <div className="filter-item dropdown-filter">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="Preferred Location" readOnly />
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </div>

      <div className="divider"></div>

      {/* 3. Job Type */}
      <div className="filter-item dropdown-filter">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17188C15.1996 3.54331 15.4942 3.98427 15.6952 4.46957C15.8962 4.95487 15.9999 5.47533 15.9999 6.00062C15.9999 6.52591 15.8963 7.04497 15.6953 7.53027C15.4943 8.01558 15.1996 8.45705 14.8281 8.82848M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.0718 5.07127 19.0718 5.99985C19.0718 6.92844 18.8886 7.84815 18.5332 8.70605C18.1778 9.56396 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>&nbsp;&nbsp;
        <input type="text" placeholder="Job type" readOnly />
        <FontAwesomeIcon icon={faChevronDown} className="icon" />

      </div>

      <div className="divider"></div>

      {/* 4. Salary Range Slider */}
      <div className="filter-item salary-filter">
        <div className="salary-label-container">
          <span className="label">Salary Per Month</span>
          <span className="salary-range">&nbsp;&nbsp;&nbsp;₹50K - ₹80K</span>
        </div>
        <div className="slider-container">
          {/* This is a simple representation. You will need a library for a functional slider */}
          <input type="range" className="slider-input" min="0" max="100" value="50" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

