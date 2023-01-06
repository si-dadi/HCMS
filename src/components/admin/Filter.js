import React from "react";

export default function Filter({filterData, setFilterData}) {

  let name, value;

  const postData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setFilterData({ ...filterData, [name]: value });
  };


  return (filterData,
    <div className="my-4">
      <h3>Filters</h3>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <select
          className="py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          id="time"
          onChange={postData}
          name="time"
          value={filterData.time} 
        >
          <option value="All Records">
            All Records
          </option>
          <option value="Active">Active</option>
          <option value="Closed">Closed</option>
        </select>
        <select
          className="py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          id="hostelName"
          onChange={postData}
          name="hostelName"
          value={filterData.hostelName} 
        >
          <option value="All Hostels" >
            All Hostels
          </option>
          <option value="Vishwakarma">Vishwakarma</option>
          <option value="Vyas">Vyas</option>
          <option value="Valmiki">Valmiki</option>
          <option value="Malviya">Malviya</option>
          <option value="Meera">Meera</option>
          <option value="Budh">Budh</option>
          <option value="Ganga">Ganga</option>
          <option value="Krishna">Krishna</option>
          <option value="Shankar">Shankar</option>
          <option value="Ram">Ram</option>
          <option value="Gautam">Gautam</option>
        </select>
        <select
          className="py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          id="deptName"
          onChange={postData}
          name="deptName"
          value={filterData.deptName} 
        >
          <option value="All Depts">
            All Depts
          </option>
          <option value="Electrical">Electrical</option>
          <option value="LAN">LAN</option>
          <option value="Carpentry">Carpentry</option>
          <option value="Plumbing">Plumbing</option>
        </select>
        <select
          className="py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          id="recent"
          onChange={postData}
          name="recent"
          value={filterData.recent} 
        >
          <option value="All">By Time</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="2 Months">2 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      {/* <h3>{filterData.time + " " + filterData.hostelName + " " + filterData.deptName+ " " +filterData.recent}</h3> */}
    </div>
  );
}
