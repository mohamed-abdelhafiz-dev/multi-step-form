import { useNavigate } from "react-router";
import {
  Card,
  Typography,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import OptionCard from "../components/OptionCard";
import { useCurrentPage } from "../providers/CurrentPageContext";
export default function AddOnsPage() {
  const [selectedAddons, setSelectedAddons] = useState(
    JSON.parse(localStorage.getItem("selectedAddons")) || []
  );
  useEffect(() => {
    localStorage.setItem("selectedAddons", JSON.stringify(selectedAddons));
  }, [selectedAddons]);
  const { currentPage, setCurrentPage } = useCurrentPage();
  useEffect(() => {
    setCurrentPage(3);
  }, []);

  const navigateTo = useNavigate();
  const [addons] = useState([
    {
      id: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+$10/yr",
    },
    {
      id: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$20/yr",
    },
    {
      id: 3,
      title: "Customizable profile",
      description: "Custom them on your profile",
      price: "+$20/yr",
    },
  ]);
  return (
    <div className="elements-center md:w-[74%] mt-5 ml-[15px] sm:ml-0">
      <Card color="transparent" shadow={false}>
        <Typography variant="h1" className="text-myDarkBlue text-3xl font-bold">
          Pick add-ons
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-myGray">
          Add-ons help enhance your gaming experience.
        </Typography>
        <Card>
          <List>
            {addons.map((addon) => (
              <ListItem key={addon.id} className="p-0">
                <label
                  htmlFor={`addon-${addon.id}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <input
                      type="checkbox"
                      id={`addon-${addon.id}`}
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => {
                        setSelectedAddons(
                          selectedAddons.includes(addon.id)
                            ? [
                                ...selectedAddons.filter(
                                  (id) => id !== addon.id
                                ),
                              ]
                            : [...selectedAddons, addon.id]
                        );
                      }}
                    />
                  </ListItemPrefix>
                  <div>
                    <h2 className="font-bold text-myDarkBlue">{addon.title}</h2>
                    <p className="text-myGray text-[14px] font-medium">
                      {addon.description}
                    </p>
                  </div>
                </label>
                <span>{addon.price}</span>
              </ListItem>
            ))}
          </List>
        </Card>
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => {
              setCurrentPage(2);
              navigateTo("/plan");
            }}
            type="submit"
            className="mt-6 bg-gray-500 self-end p-2 text-sm text-white rounded-[5px] px-3 cursor-pointer hover:bg-myGray"
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              setCurrentPage(4);
              navigateTo("/summary");
              localStorage.clear();
            }}
            type="submit"
            className="mt-6 bg-myDarkBlue self-end p-2 text-sm text-[#cdd9eb] rounded-[5px] px-3 cursor-pointer hover:bg-blue-800"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}
