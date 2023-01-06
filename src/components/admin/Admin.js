import React, { useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { ScrollToTop } from "./ScrollToTop";
import FetchData from "./FetchData";

function Admin() {

  const [filterData, setFilterData] = useState({
    time: "All Complaints",
    hostelName: "All Hostels",
    deptName: "All Departments",
  });

  return (
    <div className="overflow-x-clip">
      <Navbar/>
      <div className="filter-search" >
        <Filter filterData={filterData} setFilterData={setFilterData}/>
      </div>
      <FetchData filterData={filterData} setFilterData={setFilterData}/>
      <ScrollToTop/>
    </div>
  );
}

export default Admin;
