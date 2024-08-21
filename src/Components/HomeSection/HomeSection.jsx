import { Avatar } from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Button from "@mui/material/Button";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl);
    setUploadingImage(false);
  };
  return (
    <div className="sapce-y-5">
      <section>
      </section>
        <h1 className="py-5 text-xl font-bold opacity-90 text-left">Home</h1>
      <section className={`pb-10`}>
        <div className="flex space-x-0">
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
                  className={`border-none outline-none bg-transparent text-xl mr-40`}
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

<section>
   {[1,1,1,1,1].map((item)=><TweetCard />)}
</section>

    </div>
  );
};

export default HomeSection;
