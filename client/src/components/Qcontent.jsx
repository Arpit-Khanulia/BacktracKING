import React from 'react';
import Ide from './Ide';

const Qcontent = (props) => {
  return (
    <section className="text-gray-400 bg-1D232A body-font flex-grow pt-12 ">
      <div className="mx-auto w-full flex flex-wrap justify-center">
        <div className="lg:w-2/5 w-full ml-4 mr-4 pl-4 pr-4">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.state.Difficulty}</h2>
          <h1 className="text-white text-3xl title-font font-medium mb-1">{props.state.Title}</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <span className="ml-3">Q.ID {props.state.QuestionID}</span>
            </span>
          </div>
          <div className="max-w-full overflow-x-auto ">
            <div dangerouslySetInnerHTML={{ __html: props.state.Content }} />
          </div>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5 "></div>
          <div className="flex justify-end">
          </div>
        </div>

        <div className="lg:w-2/5 w-full ml-4 mr-4 pl-4 pr-4 ">
        <Ide userdata = {props.userdata} questiondata = {props.state} />
        </div>


      </div>
    </section>
  );
};

export default Qcontent;
