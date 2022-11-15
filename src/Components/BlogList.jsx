import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Image from "../Images/blogImage.webp";
import { deleteBlog, getBlogs } from "../servises/api";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

 
  const getBlogsDetail = async () => {
    let response = await getBlogs();
    // console.log(response);
    setBlogs(response.data);
  };
  useEffect(() => {
    getBlogsDetail();
  }, []);

  const deleteBlogData = async (id) => {
    await deleteBlog(id);
    getBlogsDetail();
  };
  console.log("all blogList = ", blogs);
  return (
    <>
      <Grid
        container
        spacing={2}
        align="center"
        justifyContent="center"
        margin={1}
      >
        {blogs.map((blog, index) => {
          return (
            <Grid item xs={10} sm={10} md={5} lg={4} padding={0} key={index}>
              <Card sx={{ maxWidth: 400 }} key={index} margin={0}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  src={`${blog.image}`} 
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component={Link}
                    to={`/editBlog/${blog.id}`}
                  >
                    Edit
                  </Button>
                  <Button size="small" onClick={() => deleteBlogData(blog.id)}>
                    Delete
                  </Button>
                  <Button size="small" component={Link} to="/:id">
                    More Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default BlogList;
