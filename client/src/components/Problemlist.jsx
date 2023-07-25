import React from 'react';
import { Link } from 'react-router-dom';

const Problemlist = (props) => {
  const { questions } = props;

  let data1= {name:'naruto'};

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="hover">
              <th className="w-1/12">{questions.QuestionID}</th>
              <td className="w-7/12">{questions.Title}</td>
              <td className="w-2/12">{questions.Difficulty}</td>
              <td className="w-2/12">
              <Link to="/solve" state={questions}>Solve</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problemlist;
