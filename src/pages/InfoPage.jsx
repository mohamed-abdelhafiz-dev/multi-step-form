import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useCurrentPage } from "../providers/CurrentPageContext";
import { useEffect, useState } from "react";

export default function InfoPage() {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      name: "",
      email: "",
      phone: "",
    }
  );
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  const { currentPage, setCurrentPage } = useCurrentPage();
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const navigateTo = useNavigate();
  return (
    <div className="elements-center md:w-[74%] p-5">
      <Card color="transparent" shadow={false}>
        <Typography variant="h1" className="text-myDarkBlue text-3xl font-bold">
          Personal info
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-myGray">
          Please provide your name, email address,
          <br className="sm:hidden" />
          and phone number.
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 text-myDarkText"
            >
              Name
            </Typography>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              size="lg"
              placeholder="e.g. Stephen King"
              className="placeholder:text-myGray placeholder:text-[15px] font-bold text-[16px] p-2 pl-2.5 rounded-[5px] border-1 border-myGray outline-none focus-within:border-myDarkBlue
              "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 text-myDarkText"
            >
              Email Address
            </Typography>
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              size="lg"
              placeholder="e.g. stephenking@lorem.com"
              className="placeholder:text-myGray placeholder:text-[15px] font-bold text-[16px] p-2 pl-2.5 rounded-[5px] border-1 border-myGray outline-none  focus-within:border-myDarkBlue"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-5 text-myDarkText"
            >
              Phone Number
            </Typography>
            <Input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="tel"
              size="lg"
              placeholder="e.g. +1 234 567 890"
              className="placeholder:text-myGray placeholder:text-[15px] font-bold text-[16px] p-2 pl-2.5 rounded-[5px] border-1 border-myGray outline-none  focus-within:border-myDarkBlue"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button
            onClick={() => {
              setCurrentPage(2);
              navigateTo("/plan");
            }}
            type="submit"
            className="mt-6 bg-myDarkBlue self-end p-2 text-sm text-[#cdd9eb] rounded-[5px] px-3 cursor-pointer hover:bg-blue-900"
          >
            Next Step
          </Button>
        </form>
      </Card>
    </div>
  );
}
