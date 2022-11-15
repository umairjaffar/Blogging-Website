import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const MyAppbar = styled(AppBar)`
background: "#EFF0F0"
`;
const PagesLink = styled(Link)`
  font-size: 20px;
  margin-right: 20px;
  color: #111111;
  text-decoration: none;
`;
const MyToolbar = styled(Toolbar)``;
const MyBox = styled(Box)`
  width: 55%;
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color:'#111111',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const HeaderNav = () => {
  return (
    <>
      <MyAppbar
        position="static"
        sx={{
          textAlign: "center",
          justifyContent: "space-between",
          background: "#EFF0F0",
        }}
      >
        <MyToolbar
          sx={{ textAlign: "center", justifyContent: "space-between",background: "#EFF0F0" }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: ".3rem",
                color: "#111111",
                textDecoration: "none",
              }}
            >
              BLOGS
            </Typography>
          </Toolbar>
          <MyBox sx={{ xs: 12, lg: 8 }}>
            <PagesLink to="/">Home</PagesLink>
            <PagesLink to="/blogList">Blog List</PagesLink>
            <PagesLink to="/addBlog">Add Blog</PagesLink>
          </MyBox>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </MyToolbar>
      </MyAppbar>
    </>
  );
};
export default HeaderNav;
