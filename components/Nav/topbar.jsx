import styles from "./nav.module.css";
const Topbar = () => {
  return (
    <div
      className={`${styles.Topbar_container} px-[30px] flex justify-between items-center py-[30px] bg-white z-[200]`}
    >
      <p className="text-[25px] text-[#151D48] font-[600]">Admin Panel</p>
      <div className="relative">
        <svg
          className="absolute top-[7px] left-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
            fill="#5D5FEF"
          />
        </svg>
        <input
          placeholder="Search here..."
          type="text"
          className={`${styles.Topbar_input} w-[300px] py-[10px] pl-[40px] text-[14px] rounded-[10px] outline-0`}
        />
      </div>

      <div className="flex items-center ">
        <img src="/images/man.svg" alt="" />
        <p className="ml-[10px]">Qwiklif Admin</p>
      </div>
    </div>
  );
};

export default Topbar;
