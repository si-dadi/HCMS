import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [formData, setFormData] = useState({
    dept: "",
    hostel: "",
    roomNumber: "",
    issue: "",
    timeFrom: "",
    timeTo: "",
    contact: "",
    status: "Active",
    uname: localStorage.getItem("displayName"),
  });

  let name, value;
  const postData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  // Post to Firebase
  const postToDatabase = async (event) => {
    event.preventDefault();
    const {
      dept,
      hostel,
      roomNumber,
      issue,
      timeFrom,
      timeTo,
      status,
      uname,
      contact,
    } = formData;

    if (
      dept != "Dept" &&
      hostel != "Hostel" &&
      dept &&
      hostel &&
      roomNumber &&
      issue
    ) {
      const response = await fetch(
        "https://hcms-bphc-default-rtdb.firebaseio.com/Complaints.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dept,
            hostel,
            roomNumber,
            issue,
            timeFrom,
            timeTo,
            status,
            uname,
            contact,
          }),
        }
      );

      if (response) {
        {
          alert("Complaint Sent! You may Logout Now");
          setFormData({
            dept: "",
            hostel: "",
            roomNumber: "",
            issue: "",
            timeFrom: "",
            timeTo: "",
            contact: "",
          });
        }
      } else {
        alert("ERROR 404: No Data Found");
      }
    } else {
      alert("Please fill all the data");
    }
  };

  return (
    <div className="container ">
      {/* bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-800 to-black */}
      {/* box header justify-center text-center bg-no-repeat w-full position: absolute lg:w-full md:w-full sm:w-full bg-black space-y-10 */}
      <div class="mainDiv text-white/90 justify-center flex-col overflow-clip flex h-screen w-screen">
        <div className="mt-10 justify-center items-center mb-10">
          <h3 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold uppercase tracking-tighter text-transparent lg:text-4xl md:3xl sm:3xl">
            Welcome, <strong>{localStorage.getItem("displayName")}</strong>
          </h3>
          <h4 className="text-gray-300 mt-4">
            Fill in these details and we'd get it sorted!
          </h4>
        </div>
        <form>
          <div className="space-x-4 space-y-4 align-middle items-center justify-center flex flex-col">
            <div className="dept" id="dept">
              <select
                name="dept"
                required
                value={formData.dept}
                onChange={postData}
                size="md"
                className="text-center bg-gray-400 items-center text-black border border-solid border-gray-300 h-8 w-full
      rounded gap-20"
              >
                <option selected>Dept</option>
                <option>Electrical</option>
                <option>LAN</option>
                <option>Carpentry</option>
                <option>Plumbing</option>
              </select>
            </div>

            <div className="room_hostel w-full space-x-4 items-center justify-center flex flex-row px-4">
              <div className="hostel items-center justify-center flex flex-col">
                <select
                  size="md"
                  required
                  className="text-center flex items-center bg-gray-400 text-black gap-20 border border-solid border-gray-300
      rounded h-12"
                  id="hostel"
                  name="hostel"
                  value={formData.hostel}
                  onChange={postData}
                >
                  <option selected>Hostel</option>
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
                &emsp;
              </div>

              <div class="input-container">
                <input
                  type="number"
                  id="room-number"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={postData}
                />
                <label>Room Number</label>
              </div>
            </div>

            <div className="input-container">
              <input maxLength={10} type="number" id="contact" name="contact" value={formData.contact} onChange={postData}/>
              <label>Contact Info</label>
            </div>

            <div id="issue">
              {" "}
              <textarea
                className=" bg-gray-900 text-white/80 text-center"
                rows={3}
                cols={40}
                required
                id="issue"
                placeholder="Mention your issue in brief"
                maxLength={75}
                name="issue"
                value={formData.issue}
                onChange={postData}
              ></textarea>
              <br />
            </div>

            <div className="available" id="available">
              <h5>Available Hours:</h5>
              <input
                className=" text-black bg-gray-400"
                type="time"
                id="time-from"
                placeholder="From"
                name="timeFrom"
                value={formData.timeFrom}
                onChange={postData}
              ></input>
              &emsp;
              <input
                className=" text-black bg-gray-400"
                type="time"
                id="time-to"
                placeholder="To"
                name="timeTo"
                value={formData.timeTo}
                onChange={postData}
              ></input>
            </div>

            <br />

            <div className="">
              <button type="sumbit" id="submitBtn" onClick={postToDatabase}>
                Submit
              </button>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="bg-red-400 hover:bg-red-600 text-white font-bold border-solid w-20 h-12 rounded-md"
                id="logout"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
