import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
const RightPart = () => {
  const HandleChangeTheme = () => {
    console.log("theme changed");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full hover:border text-gray-500 w-full pl-12"/>

        <div className="absolute  top-0 left-0 pl-3 pt-3">
          <SearchIcon className=" text-gray-500" />
          </div>
          <Brightness4Icon
            className="ml-3 cursor-pointer"
            onClick={HandleChangeTheme}
          />
</div>
        <section className="my-5 space-y-3 text-left">
          <h1 className="text-xl font-bold ">Get Verified</h1>
          <h1 className="font-bold my-2">Subscribe for more features</h1>
          <Button variant="contained"
            sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px",}}
          >
            Get Verified
          </Button>
        </section>
        <section className="mt-7 space-y-5 ">
<h1 className="font-bold text-left text-xl py-1">What's Happening</h1>
<div className="">
<p className="text-sm text-left ">
    FIFA World Cup . LIVE 
</p>
<p className="font-bold text-left">India vs Australia</p>
</div>
{[1,1,1].map((item)=>
<div className="flex justify-between w-full">
    <div className="text-left">
        <p>Entertainment . Trending</p>
        <p className="font-bold ">#BHARAT_Bandh</p>
        <p>34.2k Tweets</p>
    </div>
<MoreHorizIcon/>
</div>)}
        </section>
      </div>
  );
};

export default RightPart;
