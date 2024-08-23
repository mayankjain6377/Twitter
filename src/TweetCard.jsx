import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Tooltip from '@mui/material/Tooltip';
// import BarChartIcon from '@mui/icons-material/BarChart';

import MenuItem from "@mui/material/MenuItem";
import ThreePIcon from "@mui/icons-material/ThreeP";
import RepeatIcon from "@mui/icons-material/Repeat";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    // setAnchorEl(null);
    console.log("tweet Deleted");
    handleClose();
  };
  const handleOpenReplyModel = () => {
    console.log("open model");
  };
  const handleCreateReTweet = () => {
    console.log("tweet is retweeted");
  };
  const handleLiketweet = () => {
    console.log("like the tweet");
  };
  const viewersCount = 123; 
  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
    <RepeatIcon/>
    <p>you retweet</p>
    </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://th.bing.com/th/id/OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Mayank jain</span>
              <span className="text-gray-400">@mayank_jain6377 . 2m</span>
              {/* https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png */}
              <img
                className=" ml-2 h-5 w-5"
                src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png"
                alt="verified"
              />
            </div>
            <div className=" ">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="text-left px-3">Twitter clone full stack project with spring boot</p>
              <img
                className="w-[28rem] p-5 rounded-md"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-1 cursor-pointer hover:text-blue-400 flex items-center text-gray-500">
                
              <Tooltip title={`Reply`}>
              <ThreePIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
              </Tooltip>
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-green-600" : "text-gray-500"
                } space-x-1 flex items-center`}
              >
                 <Tooltip title={`Repost`}>
                  
                  
                <RepeatIcon
                  onClick={handleCreateReTweet}
                  className="cursor-pointer"
                />
                  </Tooltip>


                <p>32</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-500"
                } space-x-1 flex items-center`}
              >
                {true ? (
                 <Tooltip title={`Like`}>
                   <FavoriteIcon
                     onClick={handleLiketweet}
                     className="cursor-pointer"
                   />
                 </Tooltip>
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                )}
                <p>122</p>
              </div>
              <div className="space-x-1 flex cursor-pointer hover:text-blue-400 items-center text-gray-500">
                
                <BarChartIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
                <p>3.2M</p>
              </div>
              <div className="cursor-pointer hover:text-blue-400 space-x-1 flex items-center text-gray-500">
                <FileUploadIcon
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
