import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";
const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  
  const handleFollowUser = () => {
    console.log("follow useer");
  };
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 4) {
      console.log("likes tweet");
    } else if (newValue === 1) {
      console.log("all tweet");
    }
  };
  const [openProfileModal,setOpenProfileModal]=useState(false);
  const handleOpenProfileModel=() => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);
  return (
    <div>
      <section className={`z-50 flex items-center  top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer "
          onClick={handleBack}
        />

        <h1 className="py-5 text-xl font-bold opacity-90 text-2xl ml-5">Mayank jain</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://images.unsplash.com/photo-1686057483807-8e75b2bd6762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbm5lciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </section>

      <section>
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24 "
            alt="mayank jain"
            src="https://th.bing.com/th/id/OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
              
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
              className="rounded"
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div className="">
          <div className="flex items-center ">
            <h1 className="font-bold text-xl">Mayank jain</h1>
            {true && (
              <img
                className=" ml-2 h-5 w-5"
                src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png"
                alt="verified"
              />
            )}
          </div>
          <h1 className="-mt-6 text-gray-500">@mayankjain_6377</h1>
        </div>
        <div className="mt-2 space-y-3 ">
          <p className="text-justify">
            I am a passionate B.Tech student with a strong foundation in
            Java.Eager to learn and grow
          </p>
          <div className="py-1 flex space-x-5  ">
            <div className="flex items-center text-gray-500 ">
              <BusinessCenterIcon />
              <p className="ml-2 ">Education</p>
            </div>

            <div className="flex items-center text-gray-500 ">
              <LocationCityIcon />
              <p className="ml-2 ">Jaipur ,Rajasthan</p>
            </div>

            <div className="flex items-center text-gray-500 ">
              <CalendarMonthIcon />
              <p className="ml-2 ">Joined in Aug 2004</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>5.9K</span>
              <span className="text-gray-500">Followers</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>30</span>
              <span className="text-gray-500">Following</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">users replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>


<section>
  <ProfileModal handleClose={handleClose} open={openProfileModal} />
</section>

    </div>
  );
};

export default Profile;
