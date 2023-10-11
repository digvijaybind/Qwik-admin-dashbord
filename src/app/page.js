"use client";
import Colorcard from "../../components/Colorcard/colorcard";
import Landing from "../../components/Landing/page";
import { Shadow } from "../../components/Utils/utils";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { colorcard } from "../../components/sidenav";
export default function Home() {
  return (
    <main>
      <div className="flex  sm:flex-col w-[1300px] sm:w-full   items-stretch mb-[30px] pl-[30px] sm:px-[10px] ">
        <Shadow className={"w-[700px] sm:w-full  sm:overflow-x-scroll sm:mb-[30px] mr-[30px] sm:mr-0  p-[20px]"}>
          <p className="font-[600] py-[5px] text-[#05004E] text-[20px]">
            Quote Requested
          </p>
          <p className="text-[#737791]">Order Summary</p>
          <div className="flex pt-[20px] w-full sm:overflow-x-scroll  items-center">
            {colorcard.map((el, i) => (
              <div key={i} className="mr-[15px]">
                <Colorcard
                  icon={el.icon}
                  background={el.background}
                  value={el.value}
                  name={el.name}
                ></Colorcard>
              </div>
            ))}
          </div>
        </Shadow>
        <Shadow className={"w-[300px] sm:w-full p-[20px]"}>
          <p className="font-[600] py-[5px] text-[#05004E] text-[20px]">
            Aircraft Location
          </p>
        </Shadow>
      </div>
      <div className="pl-[30px] w-[1100px] sm:w-full sm:px-[10px] flex sm:flex-col mb-[30px]">
        <Shadow className={"w-[600px] sm:w-full sm:mb-[30px] mr-[20px] sm:overflow-x-scroll p-[20px]"}>
          <p className="p-[20px] text-[20px] text-[#05004E] font-[600]">
            Active Fleet
          </p>
          <table className="sm:w-[600px]">
            <thead>
              <tr>
                {[
                  "#",
                  "Name",
                  "Update Location",
                  "Price/Hour",
                  "Availability",
                ].map((el) => (
                  <th
                    className="text-[#96A5B8] text-[13px] font-normal"
                    key={el}
                  >
                    {el}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="p-[20px]">
              {[1, 2, 3, 4].map((el) => (
                <tr key={el} className="px-[20px] mb-[20px]">
                  <td className="w-[5%] text-center">{el}</td>
                  <td className="w-[30%] text-center py-[10px] ">Airbus 330</td>
                  <td className="w-[30%]">
                    <button className="border border-[#40D1F0] rounded-[8px] bg-white px-[18px] py-[5px] text-[14px]">
                      Update Location
                    </button>
                  </td>
                  <td className="w-[25%] ">
                    <button className="flex ml-[50%] transform translate-x-[-50%] items-center px-[10px]  rounded-[8px] bg-[#F0F9FF] border border-[#0095FF]">
                      <p className="text-[#0095FF] font-medium text-[15px] pr-[5px]">
                        450${" "}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="29"
                        viewBox="0 0 33 29"
                        fill="none"
                      >
                        <path
                          d="M23.807 7.52402C21.6084 5.59266 18.4926 4.47887 15.0665 4.78694C10.1163 5.22535 6.0428 8.7563 5.48978 13.1048C4.74792 18.8515 9.80606 23.6977 16.1861 23.6977C20.4888 23.6977 24.1847 21.4819 25.9112 18.2946C26.3428 17.5007 25.6954 16.5884 24.6972 16.5884C24.1981 16.5884 23.7261 16.8254 23.5102 17.2164C21.9861 20.0956 18.3307 21.9204 14.3381 21.1383C11.3437 20.5577 8.92931 18.4131 8.29536 15.7827C7.16234 11.1853 11.1414 7.10931 16.1861 7.10931C18.4251 7.10931 20.4214 7.92688 21.8781 9.2184L19.8414 11.0076C18.9916 11.7541 19.5851 13.0337 20.7856 13.0337H25.6279C26.3698 13.0337 26.9767 12.5005 26.9767 11.8488V7.59511C26.9767 6.54057 25.52 6.00737 24.6702 6.75385L23.807 7.52402Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="w-[10%]">
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      onChange={() => console.log("i am a boy")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Shadow>
        <Shadow className={"w-[500px] sm:w-full sm:overflow-x-scroll p-[20px]"}>
          <p className="p-[20px] text-[20px] text-[#FF7C03] font-[800]">
            Fleet under maintenance
          </p>
          <table className="w-full sm:w-[500px]">
            <thead>
              <tr>
                {["#", "Name", "Description", "Delivery Date"].map((el) => (
                  <th
                    className="text-[#96A5B8] text-[13px] font-normal"
                    key={el}
                  >
                    {el}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="p-[20px]">
              {[1, 2, 3, 4].map((el) => (
                <tr key={el} className="px-[20px] mb-[20px]">
                  <td className="w-[5%] text-center">{el}</td>
                  <td className="w-[45%] text-center py-[10px] ">Airbus 330</td>
                  <td className="w-[25%] text-center">
                    <p>Fault</p>
                  </td>
                  <td className="w-[25%] text-center">
                    <p>7 Oct 2023</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Shadow>
      </div>

      <Landing></Landing>
    </main>
  );
}
