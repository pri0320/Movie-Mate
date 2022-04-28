import React from "react";
import "./CustomPagination.css";

const CustomPagination = ({ page, setPage, numberOfpages }) => {
  // console.log(page, setPage)
  const handleClick = (event) => {
    setPage(event.target.id);
  };

  const pages = [];
  for (let i = 1; i <= numberOfpages; i++) {
    pages.push(i);
  }
  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
          className={page == number ? "active" : null}
      >
        {number}
      </li>
    );
  });
  return (
    <>
      <ul className="pageNumbers">{renderPageNumbers}</ul>
    </>
  );
};

export default CustomPagination;
