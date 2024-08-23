import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: "none",
};

export default function ProfileModal({open,handleClose}) {
//   const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
 
  const handleSubmit = (values) => {
    console.log("handle submit",values);
  };
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleImageChange = (event) => {
    setUploading(true);
    const { name } = event.target;
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);

    console.log("image chganbve");
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon />
                </IconButton>
                <p className="">Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]">
              <React.Fragment>
                <div className="w-full ">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://images.unsplash.com/photo-1724179016304-972febc1cc43?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <input
                      type="file"
                      className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="w-full tranform -translate-y-24 ml-4 h-[6rem] ">
                  <div className="relative">
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "4px solid white",
                      }}
                      src="https://th.bing.com/th/id/OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                      className="h-[6rem] w-full"
                    />
                    <input
                      type="file"
                      className="absolute cursor-pointer top-0 left-0 w-[10rem] h-full opacity-0"
                      onChange={handleImageChange}
                      name="image"
                    />
                  </div>

                  {/* <img 
            src="https://th.bing.com/th/id/OIP.q2YsgHsjuMWvKbVbnp-aJwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    
             alt="" /> */}
                </div>
              </React.Fragment>
              <div className="space-y-4">
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="Bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />

                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
                <div className="">
                  <p className="text-lg">Birth date .Edit</p>
                  <p className="text-2xl">October 26, 2004</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
