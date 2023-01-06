import React from "react";
import { ref, onValue, child, update, get } from "firebase/database";
import { dbase } from "../login/config";
import { Button } from "@material-tailwind/react";

export default function FetchData({ filterData }) {
  const dbRefAll = ref(dbase, "Complaints");
  var allRecords = [];
  var filteredArray = [];
  let uniqueNumber = 0;

  onValue(dbRefAll, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      let keyName = childSnapshot.key;
      let data = childSnapshot.val();
      allRecords.push({ key: keyName, data: data });
    });
  });

  if (filterData.time === "All Records") {
    if (filterData.hostelName === "All Hostels") {
      if (filterData.deptName === "All Depts") {
        filteredArray = [...new Set([...allRecords, ...filteredArray])]; //000
      } else
        filteredArray = allRecords.filter(
          (value) => value.data.dept === filterData.deptName //00x
        );
    } else if (filterData.deptName === "All Depts") {
      filteredArray = allRecords.filter(
        (value) => value.data.hostel === filterData.hostelName //0x0
      );
    } else {
      filteredArray = allRecords
        .filter(
          (value) => value.data.hostel === filterData.hostelName //0xx
        )
        .filter((value) => value.data.dept === filterData.deptName);
    }
  }

  if (filterData.time !== "All Records") {
    if (filterData.hostelName === "All Hostels") {
      if (filterData.deptName === "All Depts") {
        filteredArray = allRecords.filter(
          (value) => value.data.status === filterData.time //x00
        );
      } else
        filteredArray = allRecords
          .filter(
            (value) => value.data.dept === filterData.deptName //x0x
          )
          .filter((value) => value.data.status === filterData.time);
    } else if (filterData.deptName === "All Depts") {
      filteredArray = allRecords
        .filter(
          (value) => value.data.hostel === filterData.hostelName //xx0
        )
        .filter((value) => value.data.status === filterData.time);
    } else {
      filteredArray = allRecords
        .filter(
          (value) => value.data.hostel === filterData.hostelName //xxx
        )
        .filter((value) => value.data.dept === filterData.deptName)
        .filter((value) => value.data.status === filterData.time);
    }
  }
  const tableData = filteredArray.reverse().map((row, index) => {
    return (
      <tr
        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
        key={uniqueNumber++}
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {index + 1}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.dept}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.hostel}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.uname}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.roomNumber}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.contact}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.issue}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {row.data.timeFrom + " - " + row.data.timeTo}
        </td>
        <td>
          {row.data.status === "Active" ? (
            <Button
              color="green"
              value={row.data.status}
              onClick={() => {
                const dbRef = ref(dbase);
                const address = `Complaints/${row.key}`;
                const Daata = {
                  status: "Closed",
                };
                get(child(dbRef, address)).then((snapshot) => {
                  if (snapshot.exists()) {
                    update(ref(dbase, address), Daata);
                    alert("Complaint Closed!");
                  } else {
                    alert("Error! Cannot update, complaint doesn't exist.");
                  }
                });
              }}

              onChange={()=>FetchData}
            >
              {row.data.status}
            </Button>
          ) : (
            <Button disabled color="red">
              {row.data.status}
            </Button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-black/80 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Dept
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Hostel
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Room Number
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Contact Details
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Issue
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Availability Time
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 "
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>{tableData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
