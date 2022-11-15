import { Grid, Typography,styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const PagesLink = styled(Link)`
  font-size: 20px;
  margin-right: 20px;
  color: #111111;
  text-decoration: none;
`;
const preventDefault = (event) => event.preventDefault();

const BlogFooter = () => {
  return (
    <>
      <Grid
        container
        sx={{
          textAlign: "center",
          justifyContent: "space-between",
          background: "#EFF0F0",
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Grid item>
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "monospace",
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: ".1rem",
                color: "#111111",
                textDecoration: "none",
              }}
            >
              MUI BLOGS
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              typography: "body1",
              "& > :not(style) + :not(style)": {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <PagesLink to="/">
              HOME
            </PagesLink>
            <PagesLink to="/blogList">
              Blog List
            </PagesLink>
            <PagesLink to="/addBlog">
              Add Blog
            </PagesLink>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogFooter;
