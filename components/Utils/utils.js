import styles from "./utils.module.css";

export const Shadow = ({ children,className }) => {
  return <div className={`${styles.Shadow} ${className}`}>{children}</div>;
};

export const AddButton = () => {
  return (
    <div className="">
      <button className={`${styles.Add_button} flex font-[600] items-center px-[10px] py-[5px] rounded-[8px]`}>
        <svg
        className="px-[10px]"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
        >
          <path
            d="M18.7559 0.787777C19.0657 -0.262594 20.9343 -0.262592 21.2441 0.787779L24.4555 11.6752C24.5667 12.0522 24.9347 12.3466 25.406 12.4356L39.0153 15.0047C40.3282 15.2526 40.3282 16.7474 39.0153 16.9953L25.406 19.5644C24.9347 19.6534 24.5667 19.9478 24.4555 20.3248L21.2441 31.2122C20.9343 32.2626 19.0657 32.2626 18.7559 31.2122L15.5445 20.3248C15.4333 19.9478 15.0653 19.6534 14.5939 19.5644L0.984721 16.9953C-0.328242 16.7474 -0.32824 15.2526 0.984723 15.0047L14.5939 12.4356C15.0653 12.3466 15.4333 12.0522 15.5445 11.6752L18.7559 0.787777Z"
            fill="#171C26"
          />
        </svg>
        <p className="font-bold">Add Aircraft Data</p>
      </button>
    </div>
  );
}