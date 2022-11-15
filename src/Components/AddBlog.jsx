import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { addBlog } from "../servises/api";
import { useNavigate } from "react-router-dom";

const MyFormControl = styled(FormControl)`
  width: 90%;
  margin-top: 30px;
`;

const AddBlog = () => {
  const initialValues = {
    title: "",
    description: "",
    image: null,
  };
  const nevigate = useNavigate();
  const [newBlog, setNewBlog] = useState(initialValues);
  const [img, setImg] = useState([]);

  const onValueChange = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
      image: img,
    });
  };
  const onValueChangeImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file)
    setImg(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
//   console.log(img.name);
  const addBlogDetails = () => {
    setNewBlog({ ...newBlog });
    addBlog(newBlog);
    nevigate("/blogList");
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        align="center"
        justifyContent="center"
        marginTop={1}
      >
        <Grid item sx={{ width: 1000 }}>
          <Typography variant="h4" textAlign="center">
            Add Blog
          </Typography>
          <MyFormControl>
            <InputLabel>Upload Image :</InputLabel> <br />
            <br />
            <Input
              sx={{ paddingLeft: 2 }}
              type="file"
              name="image"
              onChange={onValueChangeImage}
            />
          </MyFormControl>
          <MyFormControl>
            <InputLabel>Title :</InputLabel>
            <Input name="title" onChange={(e) => onValueChange(e)} />
          </MyFormControl>
          <MyFormControl>
            <InputLabel>Description :</InputLabel>
            <Input name="description" onChange={(e) => onValueChange(e)} />
          </MyFormControl>
          <Button variant="contained" onClick={() => addBlogDetails()}>
            Add User
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default AddBlog;
