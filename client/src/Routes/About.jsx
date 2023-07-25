import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal text-sm leading-3 text-gray-400 hover:text-gray-200 cursor-pointer pb-2">
          About
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Welcome to BacktracKING - Your Coding Companion!
            </h2>
            <div className="font-normal text-base leading-6 text-gray-500 mt-6 whitespace-pre-wrap">
              <p>
                BacktracKING is a dynamic coding website designed to elevate
                your coding experience. With a seamless integration of an
                unofficial LeetCode API, we bring you an extensive collection of
                coding challenges, sorted by topics, to sharpen your coding
                prowess.
                <br />
                <br />
                <br />
                Unleash your creativity and solve coding problems with ease! Our
                user-friendly interface allows you to code, save, and revisit
                your solutions for future reference. No more lost masterpieces!
                <br />
                <br />
                <br />
                We value your security, <br />
                and that's why we've implemented JWT authentication to ensure a
                safe and personalized coding journey.
                <br />
                Powered by the renowned MERN stack, BacktracKING showcases my
                expertise as a skilled MERN developer.
                <br />
                Embark on a coding adventure like no other - Join BacktracKING
                today!
                <br />
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="lg:block  w-3/5 mx-auto"
              src="https://i.redd.it/kw1tmhqy7vt41.jpg"
              alt="people discussing on board"
            />

            {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" /> */}
          </div>
        </div>
      </div>

      <div>
        <div className="mt-12">
          <hr className="border-t border-gray-300 w-3/4 mx-auto" />
        </div>
        <section className="text-gray-00 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-400 mb-20">
              Contact Us
              <br className="hidden sm:block" />
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
                    LinkedIN
                  </h2>
                  <p className="leading-relaxed text-base">
                    Got a question or want to discuss something interesting?
                    Feel free to connect with me on LinkedIN, Let's connect.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/arpit-khanulia-1a6205200/"
                    className="mt-3 text-gray-100 hover:text-gray-500 inline-flex items-center"
                  >
                    LinkedIN
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
                    GitHub
                  </h2>
                  <p className="leading-relaxed text-base">
                    Discover my latest projects and contributions on GitHub.
                    Follow my profile for updates and explore my code
                    repositories.
                  </p>
                  <a
                    href="https://github.com/Arpit-Khanulia"
                    className="mt-3 text-gray-100 hover:text-gray-500 inline-flex items-center"
                  >
                    GitHub
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-200 text-lg title-font font-medium mb-2">
                    LeetCode
                  </h2>
                  <p className="leading-relaxed text-base">
                    LeetCode challenges me to think outside the box. Follow my
                    profile to see how I overcome coding obstacles with
                    creativity.
                  </p>
                  <a
                    href="https://leetcode.com/arpit-khanulia/"
                    className="mt-3 text-gray-100 hover:text-gray-500 inline-flex items-center"
                  >
                    LeetCode
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
