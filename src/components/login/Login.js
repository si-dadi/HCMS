import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Homepage from "../home/Homepage";
// import "./Login.css";
import Admin from "../admin/Admin";

function Login() {
  const [value, setValue] = useState("");

  const admins = [
    "f20210528@hyderabad.bits-pilani.ac.in",
    "shoban.dash@gmail.com",
  ];

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.displayName);
      setValue(data.user.email);
      localStorage.setItem("displayName", data.user.displayName);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("displayName"));
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value ? (
        admins.includes(localStorage.getItem("email")) ? (
          <Admin />
        ) : (
          <Homepage />
        )
      ) : (
        <>
          <div className="login items-center">
            <h2 className=" lg:text-5xl md:text-4xl m-20">
              Welcome to Hostel Complaint Management System
            </h2>
            <div className="items-center justify-center text-center flex flex-row ">
              <button
                type="button"
                class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 lg:scale-150"
                onClick={handleClick}
              >
                <svg
                  class="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
