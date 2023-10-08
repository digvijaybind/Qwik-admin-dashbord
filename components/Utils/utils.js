import styles from "./utils.module.css";

export const Shadow = ({ children,className }) => {
  return <div className={`${styles.Shadow} ${className}`}>{children}</div>;
};
