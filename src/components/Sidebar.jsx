import { useState } from "react";
import { useCurrentPage } from "../providers/CurrentPageContext";

export default function Sidebar() {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const [steps] = useState([
    {
      id: 1,
      title: "YOUR INFO",
    },
    {
      id: 2,
      title: "SELECT PLAN",
    },

    {
      id: 3,
      title: "ADD-ONS",
    },

    {
      id: 4,
      title: "SUMMARY",
    },
  ]);
  return (
    <div
      id="sidebar"
      className="p-6 py-8 rounded-[5px] text-white md:w-[26%] md:h-[70vh]"
      style={{
        backgroundImage: `url(assets/images/bg-sidebar-desktop.svg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ul className="flex flex-row md:flex-col gap-4 xs:justify-normal justify-around">
        {steps.map((step) => (
          <li key={step.id} className="flex gap-3 items-center">
            <span
              className={`
            border-1 rounded-full sm:w-6 sm:h-6
            elements-center border-white p-3 text-xl w-10 h-10 sm:text-[14px] font-medium"
             ${step.id === currentPage ? " bg-[#c0e3fa] text-black" : ""}
              `}
            >
              {step.id}
            </span>
            <div className="flex-col hidden sm:flex">
              <span
                className="
                text-[#9b97f4] text-[13px] font-[500] tracking-tight"
              >
                STEP {step.id}
              </span>
              <span className="font-bold text-[14px] text-[#ddd] tracking-wide">
                {step.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
