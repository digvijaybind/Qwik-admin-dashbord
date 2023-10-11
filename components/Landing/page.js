"use client";
import Image from "next/image";
import {showModals} from "@/store/slices";
import {Shadow} from "../Utils/utils";
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
export default function Landing() {
  const showModal = useSelector((state) => state);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add more form fields as needed
  });
  const header = [
    "Number",
    "E-Address",
    "Contact No",
    "Aircraft Type",
    "Tail Sign",
    "Location",
    "Charges per hour",
    "Speed",
    "Date",
    "CPH + Margin",
    " ",
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
    "600$",
  ];
  const dispatch = useDispatch();
  return (
    <Shadow
      className={`${
        whatToShow == "home" ? "block sm:block" : "block sm:hidden"
      } w-[1100px] sm:pb-[60px] sm:hidden sm:w-full sm:overflow-x-scroll ml-[3%] py-[30px]`}
    >
      <div className="px-[30px] ">
        <h1 className="font-semibold text-[20px]">Details</h1>
        <table className="border w-[100%] sm:w-[1100px]">
          <thead>
            <tr className="border">
              {header.map((data, i) => (
                <th className="border text-[12px] border-black p-[8px]" key={i}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {details.map((data, i) => (
                <td
                  className="border text-[12px] border-black p-[10px]"
                  key={i}
                >
                  {data}
                </td>
              ))}
              <td
                onClick={() => dispatch(showModals())}
                className="border cursor-pointer text-[12px] border-black p-[10px]"
              >
                Add Margin
              </td>
            </tr>
          </tbody>
        </table>
        <div className="absolute top-[50px] left-[50%]  transform translate-x-[-50%]">
          <Modal></Modal>
        </div>
      </div>
    </Shadow>
  );
}
