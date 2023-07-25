import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.text();
      console.log(data);
      navigate("/");
      // if(res.status != 200){
      //   const error = new Error(res.err)
      //   throw error;
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
};

export default Logout;
