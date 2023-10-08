import styles from "./nav.module.css";
import { widgets } from "../sidenav";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 py-[30px] bg-white h-[100vh] z-[200] w-[200px]">
      <img className="px-[10px]" src="/images/logo.png" alt="logo" />
      <div className="flex px-[10px] cursor-pointer  rounded-[4px] pt-[30px] flex-col  ">
        {widgets.map(({ identity, text }) => (
          <div key={text} className="flex items-center pb-[20px]">
            <div className="w-[30px] mr-[20px]"> {identity}</div>

            <p className="p-[5px] text-[14px]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
