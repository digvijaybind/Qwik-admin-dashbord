"use client";

import { showNoOfOperator } from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        showNoOperator ? "block" : "hidden"
      } fixed w-[100vw] h-[100vh] top-0 left-0 z-[300]`}
    >
      <div
        onClick={() => dispatch(showNoOfOperator())}
        className="absolute top-0 left-0 w-[100vw] h-[100vh]  bg-[#D9D9D98C] "
      ></div>
      <div className=" absolute top-[5vh] overflow-y-hidden overflow-y-scroll left-[50%] transform translate-x-[-50%] z-[500] w-[90vw] bg-white  h-[500px]">
        <table className="w-full">
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
            </tr>
          </thead>
          <tbody>
            {Array(30)
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoOperators;
