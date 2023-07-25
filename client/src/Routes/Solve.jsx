import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Qcontent from "../components/Qcontent";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Solve = (props) => {
  const [data, setData] = useState(null); // State to store the fetched data
  const navigate = useNavigate();

  const verification = async () => {
    try {
      const res = await fetch("/problems", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const responseData = await res.json();
      setData(responseData); // Update the state with the fetched data
      console.log("This is the user data that came from the backend:");
      console.log(responseData);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    verification();
  }, []);

  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div>
      <Navbar />
      {/* Check if data is available before rendering Qcontent */}
      {data && <Qcontent state={state} userdata={data} />}
      {/* <h1>{state}</h1> */}
      <Footer />
    </div>
  );
};

export default Solve;
