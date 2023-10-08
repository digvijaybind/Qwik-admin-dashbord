import styles from "./Colorcard.module.css";

const Colorcard = ({ icon, value, background, name }) => {
  return (
    <div className={`${styles.Container} rounded-[16px] ${background} `}>
      <div>{icon}</div>
      <p className="py-[14px] text-[20px] font-[600] text-[#151D48]">{value}</p>
      <p className="text-[#425166] text-[12px] pb-[5px]">{name}</p>
      <p className="text-[#4079ED] text-[10px]">+8% from yesterday</p>
    </div>
  );
};

export default Colorcard;
