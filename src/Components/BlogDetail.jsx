import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Image from "../Images/blogImage.webp";
import { getBlog } from "../servises/api";
// import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const {id} = useParams()
  const [blog, setBlog] = useState();

  useEffect(() => {
    getBlogDetail();
  }, []);

  const getBlogDetail = async () => {
    let response = await getBlog(id);
    console.log('resp:',response);
    console.log('rep.data:',response.data);
  };
  console.log('blog',blog);
  return (
    <>
      {/* <Grid
        container
        spacing={2}
        align="center"
        justifyContent="center"
        marginTop={1}
      >
        <Grid item xs={10} sm={10} md={5} lg={4} padding={0}>
              <Card sx={{ maxWidth: 400 }} margin={0}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={Image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.discription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                  <Button size="small">
                    More Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
      </Grid> */}
    </>
  );
};

export default BlogDetail;





// {/* {blog.map((blog, index) => {
//           return (
            
//           );
//         })} */}