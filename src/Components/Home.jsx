import React from "react";
import { Container, Grid, styled, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Image1 from "../Images/blogImage.webp";
import Image2 from "../Images/iphone1.jpg";
import Image3 from "../Images/iphone2.jpg";
import Image4 from "../Images/iphone3.jpg";
import { Box } from "@mui/system";

const HomeContainer = styled(Container)``;
const GridItem = styled(Grid)`
  display: "flex";
`;

const Home = () => {
  return (
    <>
      <HomeContainer sx={{ background: "#EFF0F0" }}>
        <Grid container margin={3}>
          <GridItem item xs={10} md={6} lg={6} sx={{
            
          }}>
            <Box>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={Image1}
              />
            </Box>
            <Box>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={Image2}
              />
            </Box>
            <Box>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={Image3}
              />
            </Box>
            <Box>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={Image4}
              />
            </Box>
          </GridItem>
          <Grid item xs={10} md={6} lg={6}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                marginBottom:5,
              }}
            >
              WellCome to Blogs,
              <br /> Check BlogList Component for Different Blogs.
            </Typography>
            <Box sx={{padding:3}}>
              <Typography sx={{
                 textAlign: "center",
                 fontFamily: "monospace",
                 fontWeight: 500,
                 fontSize: 18,
                 letterSpacing: ".1rem",
                 color: "inherit",
                 textDecoration: "none",
                 marginBottom:5,
              }}>
                We've crammed the most important information to help you get
                started with Ghost into this one post. It's your cheat-sheet to
                get started, and your shortcut to advanced features.
              </Typography>
              <Typography sx={{
                 textAlign: "center",
                 fontFamily: "monospace",
                 fontWeight: 400,
                 fontSize: 16,
                 letterSpacing: ".1rem",
                 color: "inherit",
                 textDecoration: "none",
                 marginBottom:5,
              }}>
                We've crammed the most important information to help you get
                started with Ghost into this one post. It's your cheat-sheet to
                get started, and your shortcut to advanced features.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </HomeContainer>
    </>
  );
};
export default Home;
