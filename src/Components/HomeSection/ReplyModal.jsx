import React, { useState } from "react";
import Box from '@mui/material/Box';
import {Button,Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import ImageIcon from "@mui/icons-material/Image";

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddReactionIcon from '@mui/icons-material/AddReaction';
// import Button from "@mui/material/Button";
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  border:"none",
outline:"none",
bgcolor: 'background.paper',
boxShadow: 24,
p: 4,
borderRadius:4
};
const handleSubmit=(values)=>{
    console.log("handle subit ",values);
    
}
export default function ReplyModal({open,handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
const navigate=useNavigate();
const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const handleSubmit = (values) => {
    console.log("values", values);
  };
const formik=useFormik({
    initialValues:{
        content:"",
        image:"",
        tweetid:4
    },
    onSubmit:handleSubmit
}) ;
const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl);
    setUploadingImage(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
    
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate(`/tweet/${3}`)} className="cursor-pointer">
              <p className="text-left ">Twitter clone full stack project with spring boot</p>
           
            </div>
      
          </div>
        </div>


   

      </div>
      <section className={`py-10`}>
        <div className="flex space-x-3">
          <Avatar
            alt="username"
            src="https://th.bing.com/th/id/OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={`border-none outline-none bg-transparent text-xl mr-40 `}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div className="">
  <img src="" alt="" />
</div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                  <ImageIcon className="text-[#1d9bf0]" />
                  <input
                    type="file"
                    name="imageFile"
                    className="hidden"
                    onChange={handleSelectImage}
                  />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <AddReactionIcon className="text-[#1d9bf0]" />
                </div>
                <div className="">
                  <Button
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    paddingY: "8px",
                    paddingX: "20px",

                    bgcolor: "#1e88e5",
                  }}
                  variant="contained"
                  type="submit"
                  >
                    Tweet
                  </Button>


                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
        </Box>
      </Modal>
    </div>
  );
}
