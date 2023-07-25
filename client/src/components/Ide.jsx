import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Ide(props) {
  const [code, setCode] = useState("");

  useEffect(() => {
    // Fetch code data from the database
    fetchCodeData();
  }, []); // Pass userdata as a dependency to trigger effect on its change

  async function fetchCodeData() {
    try {
      if (!props.userdata) return; // If userdata is not available, exit the function or handle accordingly

      // Send a POST request to fetch code data from the server using userdata
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:props.userdata._id,qid:props.questiondata.QuestionID })
      };

      const response = await fetch('/getCode', requestOptions);

      // Check if the response status is not ok (e.g., 404 or 500)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response data as JSON
      const data = await response.text();

      // Set the fetched code data to the state
      setCode(data);
      console.log('code recieved from the backend');
      console.log(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Fetch error:', error);
    }
  }

  async function postData(requestData) {
    try {
      // Define the request options for the POST request
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      };
  
      // Send the POST request using fetch()
      const response = await fetch('/ide', requestOptions);
  
      // Check if the response status is not ok (e.g., 404 or 500)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response data as JSON
      const data = await response.text();
  
      // Process the response data
      console.log(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Fetch error:', error);
    }
  }

  const handelsubmit = (e) => {
    postData({ code: code, questiondata: props.questiondata, userdata: props.userdata });
    window.alert('code saved successfully');
  }

  const onChange = (value, viewUpdate) => {
    setCode(value);
  }

  return (
    <div className="mt-12 w-full" >
      <CodeMirror
        value={code}
        height="500px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <button onClick={handelsubmit} className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 mb-4 focus:outline-none hover:bg-indigo-600 rounded">Save</button>
    </div>
  );
}
