import React, { useState } from "react";
import { Link } from "react-router-dom";
import pdata from "./problems.json";
import Problemsskeleton from "./Problemsskeleton";
export const Problems = () => {
    const [state,setState]=useState(true);
  const cimages = [
    {
      src: "https://assets.leetcode.com/users/images/cfb202cc-aa27-4d2f-8d89-bbd63f69e29a_1733212891.0652199.png",
    },
    {
      src: "https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg",
    },
    {
      src: "https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png",
    },
    // {
    //     src: "https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png",
    //   },
  ];
  console.log(pdata);

  const studyplan = [
    {
      src: "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover",
      name: "Try Interview 150",
      des: "Must-do List for Interview Prep",
    },
    {
      src: "https://assets.leetcode.com/study_plan_v2/leetcode-75/cover",
      name: "Leetcode 75",
      des: "Ace Coding Interview With &5 QS",
    },
    {
      src: "https://assets.leetcode.com/study_plan_v2/top-sql-50/cover",
      name: "SQL 50",
      des: "Crack SQL Interview In 50 QS",
    },
    {
      src: "https://assets.leetcode.com/study_plan_v2/introduction-to-pandas/cover",
      name: "Introduction to Pandas",
      des: "Learn Basic Pandas in 15 QS",
    },
    {
      src: "https://assets.leetcode.com/study_plan_v2/30-days-of-javascript/cover",
      name: "30Days of JavaScript",
      des: "Learn JS Basics with 30 Qs",
    },
    {
      src: "https://assets.leetcode.com/study_plan_v2/amazon-spring-23-high-frequency/cover",
      name: "Amazon Spring 23",
      des: "Practice Amazon 35 Recently",
    },
  ];

  setTimeout(() => {
    setState(false);
  }, 1500);

if(state){
    return <Problemsskeleton/>
}
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a]">
      <nav className="flex items-center justify-between bg-[#282828] px-4 py-3 text-white shadow-md">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <div className="hidden h-6 px-6 dark:flex">
            <img
              src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
              alt="LeetCode Logo"
            />
          </div>
          <div className="flex gap-6 ">
            <h1 className="text-lg text-[#fff9]">Explore</h1>
            <Link to={"/problems"}>
              <h1 className="text-lg text-[#fff9]">Problems</h1>
            </Link>
            <h1 className="text-lg text-[#fff9]">Contest</h1>
            <h1 className="text-lg text-[#fff9]">Discuss</h1>
            <h1 className="text-lg text-[#fff9]">Interview</h1>
            <h1 className="text-lg text-yellow-500">Store</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4 mx-8">
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-bell"></i>
          </button>
          <button className="text-gray-400 hover:text-white">
            <i className="fas fa-cog"></i>
          </button>
          <Link to={"/p/_NileshRaut"}>
            <div className="w-8 h-8 bg-gray-600 rounded-lg-full overflow-hidden rounded-3xl">
              <img
                src="https://assets.leetcode.com/users/avatars/avatar_1641729009.png"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="text-yellow-500 bg-yellow-700 backdrop-blur-lg	  px-4 py-[7.5px] rounded-lg-md text-sm font-bold rounded-lg">
            Premium
          </div>
        </div>
      </nav>

      <div className="flex flex-row gap-8">
        <div className="w-[75.5%] my-16 ml-4 ">
          <div className=" flex flex-row gap-8 flex-wrap mb-8 ">
            {cimages.map((data, index) => {
              return (
                <img
                  alt="as"
                  key={index}
                  className="w-[300px] h-[150px] rounded-lg"
                  src={data.src}
                />
              );
            })}
          </div>
          <div className="flex flex-row justify-between mb-4">
            <h2 className="text-2xl text-gray-400  text-bold">Study Plan</h2>
            <h2 className="text-blue-300 cursor-pointer">See all</h2>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {studyplan.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row bg-[#2a2a2a] min-w-[310px] max-h-[88px] rounded-lg gap-2"
                >
                  <img
                    className="w-[72px] h-[72px] rounded-lg m-[8px]"
                    src={data.src}
                    alt="as"
                  />
                  <div className="flex flex-col  justify-center">
                    <h2 className="text-white">{data.name}</h2>
                    <p className="text-sm text-gray-600">{`${data.des.slice(
                      0,
                      20
                    )}...`}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <table className="w-full mt-16 table-auto">
              <tr className="text-gray-400 border-b-2 border-[#222222] h-[40px] ">
                <th>Status</th>
                <th className="float-start	px-16 my-4">Title</th>
                <th>Solution</th>
                <th>Acceptance</th>

                <th>Difficulty</th>
                <th>Frequently</th>
              </tr>
              {pdata.questions.map((data, index) => {
                return (
                  <tbody>
                    <tr
                      className={`${
                        index % 2 === 0 ? "" : "bg-[#2a2a2a]"
                      } h-[50px] text-white  `}
                      key={index}
                    >
                      <th>{data.status === "ac" ? "✅" : "👎🏻"}</th>
                      <th className="text-md font-light float-start	my-4 px-16">
                        <Link to={`/problem/${data.titleSlug}`}>{data.title}</Link>
                      </th>
                      <th>{pdata.hasSolution === true ? "✔️" : "❌"}</th>
                      <th className="text-sm font-light">{data.acRate}</th>
                      <th
                        className={`${
                          data.difficulty === "Easy"
                            ? "text-green-500"
                            : data.difficulty === "Medium"
                            ? "text-yellow-500"
                            : data.difficulty === "Hard"
                            ? "text-red-500"
                            : ""
                        } text-sm font-medium`}
                      >
                        {data.difficulty}
                      </th>{" "}
                      <th>🔒</th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
        <div className="w-[24.5%] my-16 mr-4 ">
          <div className="shadow-lg">
            <div className="p-2 dark:bg-[#2a2a2a] bg-white rounded-t">
              <div className="px-8 flex items-center justify-between">
                <span
                  tabIndex="0"
                  className="focus:outline-none  text-sm font-bold dark:text-gray-100 text-gray-800"
                >
                  Day 8
                </span>
                <div className="flex items-center">
                  <button
                    aria-label="calendar backward"
                    className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <img
                    alt="as"
                    className="w-[50px] h-[60px] -mt-8"
                    src="https://leetcode.com/static/images/badges/2024/lg/2024-12.png"
                  />
                  <button
                    aria-label="calendar forward"
                    className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler  icon-tabler-chevron-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Mo
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Tu
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            We
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Th
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Fr
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Sa
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                            Su
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            1
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            2
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            3
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            4
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            5
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            6
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            7
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-full h-full">
                          <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <Link
                              role="link"
                              tabIndex="0"
                              className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-sm w-8 h-8 flex items-center justify-center font-medium text-white bg-[#2cbb5d] rounded-full"
                            >
                              8
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            9
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            10
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            11
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            12
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            13
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            14
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            15
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            16
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            17
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            18
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            19
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            20
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            21
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            22
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            23
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            24
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100">
                            25
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            26
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            27
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            28
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            29
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">
                            30
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
