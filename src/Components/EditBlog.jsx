import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Grid,
} from "@mui/material";
import {  getBlog, editBlog } from "../servises/api";
import { useNavigate } from "react-router-dom";

const MyFormControl = styled(FormControl)`
  width: 90%;
  margin-top: 30px;
`;

const EditBlog = () => {
  const initialValues = {
    title: "",
    description: "",
    image : '',
  };
  const nevigate = useNavigate();
  const { id } = useParams();
//   console.log("editBlog id: ", id);
  const [editCurrentBlogg, setEditBlog] = useState(initialValues);
  const [img, setImg] = useState([]);

  useEffect(() => {
    getEditBlog();
  },[])
  const getEditBlog = async () => {
    let response = await getBlog(id)
    setEditBlog(response.data)
  }
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

  const onValueChange = (e) => {
    setEditBlog({ ...editCurrentBlogg, [e.target.name]: e.target.value, image:img });
    console.log(editCurrentBlogg);
  };
  const editBlogDetails = () => {
    editBlog(editCurrentBlogg, id);
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
            Edit Blog
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
          <Button variant="contained" onClick={() => editBlogDetails()}>
            Edit Blog
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditBlog;
