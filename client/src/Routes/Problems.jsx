import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Problemlist from "../components/Problemlist";
import { useNavigate } from "react-router-dom";

const Problems = () => {
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

      const data = await res.json();
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

  const [selectvalue, setselectvalue] = useState("dynamic-programming");
  const [questions, setquestions] = useState([
    { Title: "N/A", Difficulty: "N/A", QuestionID: "-" },
  ]);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      postData();
    }
  }, [selectvalue]);

  const selecthandel = (e) => {
    setselectvalue(e.target.value);
  };

  const requestData = {
    svalue: selectvalue,
  };

  async function postData() {
    try {
      // Define the request options for the POST request
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };

      // Send the POST request using fetch()
      const response = await fetch("/", requestOptions);

      // Check if the response status is not ok (e.g., 404 or 500)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the response data as JSON
      const data = await response.json();

      // Process the response data

      setquestions(data);
      // console.log(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Fetch error:", error);
    }
  }

  console.log(selectvalue);
  console.log(questions);

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-bold mt-8 mb-8">Problems</h1>

      <select
        onChange={selecthandel}
        className="select select-ghost w-full max-w-xs mt-4 mb-4 mx-auto block"
      >
        <option disabled value="Problem Type">
          Topic
        </option>
        <option value="math">Math</option>
        <option value="array">Array</option>
        <option value="string">string</option>
        <option value="two-pointers">Two Pointers</option>
        <option value="divide-and-conquer">Divide and Conquer</option>
        <option value="binary-search">Binary Search</option>
        <option value="matrix">Matrix</option>
        <option value="stack">Stack</option>
        <option value="linked-list">Linked LIst</option>
        <option value="recursion">Recursion</option>
        <option value="backtracking">backtracking</option>
        <option value="dynamic-programming">dynamic-programming</option>
        <option value="depth-first-search">Depth First Search</option>
        <option value="breadth-first-search">Breadth First Search</option>
        <option value="binary-tree">Binary Tree</option>
      </select>

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
      {questions.map((x) => {
        return <Problemlist key={x.QuestionID} questions={x} />;
      })}
    </div>
  );
};

export default Problems;
