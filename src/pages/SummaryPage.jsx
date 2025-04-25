import { useEffect } from "react";
import { useCurrentPage } from "../providers/CurrentPageContext";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function SummaryPage() {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const navigateTo = useNavigate();

  useEffect(() => {
    setCurrentPage(4);
  }, []);

  return (
    <div className="elements-center flex-col text-center md:w-[74%] mt-10">
      <img src="/src/assets/images/icon-thank-you.svg" alt="thank you img" />
      <h1 className="text-myDarkBlue text-3xl font-bold mt-5">Thank you!</h1>
      <p className="mt-4 text-gray-500 p-4">
        Thanks for confirming your subscription!We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <Button
        onClick={() => {
          setCurrentPage(1);
          navigateTo("/");
        }}
        type="submit"
        className=" mt-15 bg-gray-500 self-center p-2 text-sm text-white rounded-[5px] px-3 cursor-pointer hover:bg-myGray"
      >
        Home
      </Button>
    </div>
  );
}
