"use client";

import { setWhatToShow, showModals, showNoOfOperator } from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";
import { AddButton } from "../Utils/utils";

const NoOperators = () => {
  const details = {
    id: "#20542",
    code: "+91 9302556213",
    aircraftType: "G-650",
    tailsign: "A-350",
    location: "Dubai",
    charges: "$500",
    speed: "800m/h",
    date: "13/10/2023",
  };
  const showNoOperator = useSelector(
    (state) => state.operator.showNoOfOperator
  );
  const whatToShow = useSelector((state) => state.operator.whatToShow);
  const dispatch = useDispatch();
  return (
    <div
      className={` ${
        whatToShow == "operator" ? "sm:block block" : "sm:hidden hidden"
      } fixed w-[100vw] h-[100vh] top-0 left-0 z-[300]`}
    >
      <div
        onClick={() => dispatch(setWhatToShow(""))}
        className="absolute top-0 left-0 w-[100vw] h-[100vh] sm:hidden  bg-[#D9D9D98C] "
      ></div>
      <div className=" absolute top-[5vh] sm:top-[100px] overflow-y-hidden overflow-y-scroll overflow-x-scroll left-[50%] transform translate-x-[-50%] z-[500] w-[90vw] sm:w-[100%] bg-white  h-[500px]">
        <table className="w-full sm:w-[1100px]">
          <thead>
            <tr>
              <th className="py-[10px]">ID</th>
              <th>Contact No. (Include country code)</th>
              <th>Aircraft Type</th>
              <th>Tail sign</th>
              <th>Location</th>
              <th>Charges Per Hour (USD)</th>
              <th>Speed(Miles/hour)</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(details)
              .map((data, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 == 0 ? "bg-[#F7F6FE]" : "bg-white"
                  } border border-r-0 border-l-0`}
                >
                  <td className="text-center py-[15px]">{data.id}</td>
                  <td className="text-center">{data.code}</td>
                  <td className="text-center">{data.aircraftType}</td>
                  <td className="text-center">{data.tailsign}</td>
                  <td className="text-center">{data.location}</td>
                  <td className="text-center">{data.charges}</td>
                  <td className="text-center">{data.speed}</td>
                  <td className="text-center">{data.date}</td>
                  <td className="w-[100px]">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="#624DE3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                          stroke="#624DE3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 6H5H21"
                          stroke="#A30D11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                          stroke="#A30D11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 11V17"
                          stroke="#A30D11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 11V17"
                          stroke="#A30D11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div
          onClick={() => dispatch(showModals())}
          className="flex justify-end mt-[30px]"
        >
          <AddButton></AddButton>
        </div>
      </div>
    </div>
  );
};

export default NoOperators;
