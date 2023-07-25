import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Problemlist from "../components/Problemlist";
import { useNavigate } from "react-router-dom";

const Submissions = () => {
  const [data, setdata] = useState({});

  const navigate = useNavigate();

  const verification = async () => {
    try {
      const res = await fetch("/submissions", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const datares = await res.json();
      setdata(datares);
      console.log(data);

      // if(res.status != 200){
      //   const error = new Error(res.err)
      //   throw error;
      // }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  useEffect(() => {
    verification();
  }, []);

  console.log("data inside submissions");
  console.log(data.submissions);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-bold mt-8 mb-8">
        My Submissions
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th className="w-1/12">Q.ID</th>
            <th className="w-7/12">Name</th>
            <th className="w-2/12">Difficulty</th>
            <th className="w-2/12">Link</th>
          </tr>
        </thead>
      </table>

      {data.submissions?.length > 0 ? (
        data.submissions
          .slice() // Create a shallow copy of the array to avoid mutating the original
          .reverse() // Reverse the array
          .map((x) => (
            <Problemlist
              key={x.questiondata.QuestionID} // Use QuestionID as the unique key
              questions={x.questiondata}
            />
          ))
      ) : (
        <div className="mt-12 flex justify-center items-center h-full">
          <p className="text-gray-500">No submissions to display.</p>
        </div>
      )}
    </div>
  );
};

export default Submissions;
