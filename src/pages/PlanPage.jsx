import { useNavigate } from "react-router";
import { Card, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import OptionCard from "../components/OptionCard";
import { useCurrentPage } from "../providers/CurrentPageContext";
export default function PlanPage() {
  const [planData, setPlanData] = useState(
    JSON.parse(localStorage.getItem("planData")) || {
      plan: "",
      yearly: false,
    }
  );
  useEffect(() => {
    localStorage.setItem("planData", JSON.stringify(planData));
  }, [planData]);
  const { currentPage, setCurrentPage } = useCurrentPage();
  useEffect(() => {
    setCurrentPage(2);
  }, []);

  const navigateTo = useNavigate();
  const [options] = useState([
    {
      id: 1,
      icon: "icon-arcade.svg",
      name: "Arcade",
      price: "$9/mo",
    },
    {
      id: 2,
      icon: "icon-advanced.svg",
      name: "Advanced",
      price: "$12/mo",
    },
    {
      id: 3,
      icon: "icon-pro.svg",
      name: "Pro",
      price: "$15/mo",
    },
  ]);
  return (
    <div className="elements-center md:w-[74%] p-5 text-center  md:text-left">
      <Card color="transparent" shadow={false}>
        <Typography variant="h1" className="text-myDarkBlue text-3xl font-bold">
          Select your plan
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-myGray">
          You have the option of monthly or yearly billing.
        </Typography>
        <div className=" flex flex-col sm:flex-row gap-0.5 mt-5 ">
          {options.map((option) => (
            <OptionCard
              key={option.id}
              option={option}
              planData={planData}
              setPlanData={setPlanData}
            />
          ))}
        </div>
        <div className="flex justify-center gap-3 items-center mt-5">
          <label htmlFor="toggle" className="text-s text-gray-700">
            Monthly
          </label>
          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input
              checked={planData.yearly}
              onChange={() =>
                setPlanData((prev) => ({ ...prev, yearly: !prev.yearly }))
              }
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />

            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
          <label htmlFor="toggle" className="text-s text-gray-700">
            Yearly
          </label>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <Button
            onClick={() => {
              setCurrentPage(1);
              navigateTo("/info");
            }}
            type="submit"
            className="mt-6 bg-gray-500 self-end p-2 text-sm text-white rounded-[5px] px-3 cursor-pointer hover:bg-myGray"
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              setCurrentPage(3);
              navigateTo("/addons");
            }}
            type="submit"
            className="mt-6 bg-myDarkBlue self-end p-2 text-sm text-[#cdd9eb] rounded-[5px] px-3 cursor-pointer hover:bg-blue-800"
          >
            Next Step
          </Button>
        </div>
      </Card>
    </div>
  );
}
