"use client";
import Image from "next/image";
import { showModals } from "@/store/slices";
import { AddButton, Shadow } from "../Utils/utils";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function Landing() {
  const showModal = useSelector((state) => state);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add more form fields as needed
  });
  const header = [
    "ID",
    "E-Address",
    "Contact No",
    "Aircraft Type",
    "Tail Sign",
    "Location",
    "Charges per hour",
    "Speed",
    "Date",
 
  ];
  const details = [
    "01",
    "vipin@gmail",
    "01010101",
    "A380",
    "A380",
    "Dubai",
    "450$",
    "500 MILES",
    "02 Oct 2023",
    "Add margin",
  ];
  const dispatch = useDispatch();
  const whatToShow = useSelector((state) => state.operator.whatToShow);

  return (
    <Shadow
      className={`${
        whatToShow == "home" ? "block sm:block" : "block sm:hidden"
      } w-[1100px] sm:pb-[60px] sm:hidden sm:w-full sm:overflow-x-scroll ml-[3%] py-[30px]`}
    >
      <div className="px-[30px] h-[500px] overflow-hidden overflow-y-auto">
        <h1 className="font-semibold text-[20px]">Details</h1>
        <table className=" w-[100%] sm:w-[1100px]">
          <thead>
            <tr className="">
              {header.map((data, i) => (
                <th className=" text-[12px] border-black p-[8px]" key={i}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(25)
              .fill(1)
              .map((el, i) => (
                <tr
                  className={`${i % 2 == 0 ? "bg-[#F7F6FE]" : "bg-white"}`}
                  key={i + 1}
                >
                  {details.map((data, i) => (
                    <td
                      className=" text-[14px] font-[500] text-center border-black p-[10px]"
                      key={i}
                    >
                      {data}
                    </td>
                  ))}

                </tr>
              ))}
          </tbody>
        </table>
        <div
          onClick={() => dispatch(showModals())}
          className="flex justify-end mt-[20px]"
        >
          <AddButton></AddButton>
        </div>
        <Modal></Modal>
      </div>
    </Shadow>
  );
}
