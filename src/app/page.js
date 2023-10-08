import Colorcard from "../../components/Colorcard/colorcard";
import Landing from "../../components/Landing/page";
import { Shadow } from "../../components/Utils/utils";
import { colorcard } from "../../components/sidenav";
export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-stretch mb-[30px] px-[30px]">
        <Shadow className={"w-[65%]  p-[20px]"}>
          <p className="font-[600] py-[5px] text-[#05004E] text-[20px]">
            Quote Requested
          </p>
          <p className="text-[#737791]">Order Summary</p>
          <div className="flex pt-[20px] items-center">
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
        <Shadow className={"w-[30%] p-[20px]"}>
          <p className="font-[600] py-[5px] text-[#05004E] text-[20px]">
            Aircraft Location
          </p>
        </Shadow>
      </div>

      <Landing></Landing>
    </main>
  );
}
