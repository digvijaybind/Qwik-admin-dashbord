import Landing from "../../components/Landing/page";

export default function Home() {
  const widgets = [
    {
      identity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
            fill="#2F80ED"
          />
        </svg>
      ),
      text: "Dashboard",
    },
    {
      identity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
        >
          <path
            d="M13.875 11C15.2238 11 16.3044 9.66 16.3044 8C16.3044 6.34 15.2238 5 13.875 5C12.5262 5 11.4375 6.34 11.4375 8C11.4375 9.66 12.5262 11 13.875 11ZM7.375 11C8.72375 11 9.80437 9.66 9.80437 8C9.80437 6.34 8.72375 5 7.375 5C6.02625 5 4.9375 6.34 4.9375 8C4.9375 9.66 6.02625 11 7.375 11ZM7.375 13C5.48187 13 1.6875 14.17 1.6875 16.5V19H13.0625V16.5C13.0625 14.17 9.26813 13 7.375 13ZM13.875 13C13.6394 13 13.3713 13.02 13.0869 13.05C14.0294 13.89 14.6875 15.02 14.6875 16.5V19H19.5625V16.5C19.5625 14.17 15.7681 13 13.875 13Z"
            fill="#8E8E93"
          />
        </svg>
      ),
      text: "Number of operators",
    },
    {
      identity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z"
            fill="#8E8E93"
          />
        </svg>
      ),
      text: "Customers",
    },
    {
      identity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.225 17.25C5.27813 17.25 4.125 16.0969 4.125 15.15V7.5H3.675C2.89219 7.5 2.25 8.14219 2.25 8.925V21.75L4.99219 19.0312H15.075C15.8578 19.0312 16.5 18.3703 16.5 17.5828V17.25H6.225Z"
            fill="#8E8E93"
          />
          <path
            d="M20.1141 2.25H7.02656C6.12656 2.25 5.39062 2.98594 5.39062 3.88594V14.4844C5.39062 15.3844 6.12656 16.125 7.02656 16.125H18.1922L21.75 18.6094V3.88594C21.75 2.98594 21.0141 2.25 20.1141 2.25Z"
            fill="#8E8E93"
          />
        </svg>
      ),
      text: "Revenue",
    },
    {
      identity: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
        >
          <path
            d="M13.5469 19H10.4531V15.9531H13.5469V19ZM13.5 14.4062H10.5C10.5 9.67188 15 9.94844 15 6.95312C15 5.30312 13.65 3.98125 12 3.98125C10.35 3.98125 9 5.40625 9 7H6C6 3.67188 8.68594 1 12 1C15.3141 1 18 3.64375 18 6.95312C18 10.6984 13.5 11.125 13.5 14.4062Z"
            fill="#8E8E93"
          />
        </svg>
      ),
      text: "Help",
    },
  ];
  return (
    <main>
      <div className="relative flex bg-white shadow-md rounded-2px justify-center px-[30] pt-[10px] items-center">
        <div className="absolute flex items-center top-[5px] left-[20px] ">
          <img src="/images/man.svg" alt="" />
          <p className="ml-[10px]">Qwiklif Admin</p>
        </div>

        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex justify-between p-[20px]">
        <div className="flex px-[10px] cursor-pointer shadow-lg bg-[white] rounded-[4px] pt-[30px] flex-col w-[20%]">
          {widgets.map(({ identity, text }) => (
            <div key={text} className="flex items-center pb-[8px]">
              {identity}
              <p className="p-[5px] text-[14px]">{text}</p>
            </div>
          ))}
        </div>
        <div className="w-[76%]">
          <Landing></Landing>
        </div>
      </div>
    </main>
  );
}
