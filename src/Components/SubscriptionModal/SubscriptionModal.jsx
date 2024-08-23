import * as React from "react";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function SubscriptionModal({open,handleClose}) {



    const features=["Prioritized rankings in conversations and search ",
    "See approximately twice as many Tweets between ads in your For You and Following timelines.",
    "Add bold and italie text in your Tweets.",
    "Post longer videos and 1080p video uploads.",
    "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features"];
    



//   const features = ["Prioritized rankings in conversations and search"];
//   const features = ["Prioritized rankings in conversations and search"];
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
  const [plan, setPlan] = React.useState("Annually");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
            <p className="">Edit Profile</p>
          </div>

          <div className="flex justify-center py-10 ">
            <div className="w-[80%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center bg-amber-100 justify-between shadow-lg   ">
                <h1 className="text-xl text-justify font-semibold pr-5 text-yellow-600">
                  Premium subscribers with a verified phone number will get a
                  Golden checkmark once approved.
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png "
                  alt=""
                />
              </div>

              <div className="flex justify-between border border-amber-200 rounded-full px-5 py-3">
                <div className="">
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5 ">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("Monthly")}
                  className={`${
                    plan === "Monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              <div className="space-y-3 ">
                {features.map((item) => (
                  <div className="flex items-center space-x-5 ">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p>
                        {item}

                    </p>
                  </div>
                ))}
              </div>


              <div className="cursor-pointer  flex justify-center rounded-2xl  bg-amber-300 p-3 borderradius ">
                <span className="line-through italic ">
                ₹7,000.00 
                </span>
                <span className="ml-5 font-semibold   ">
                ₹5900.00 /Year
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
