import React from "react";
import { Route, Routes } from "react-router-dom";
// import Blogging from "../Components/Blogging";
import Home from "../Components/Home";
import BlogList from "../Components/BlogList";
import BlogDetail from "../Components/BlogDetail";
import AddBlog from "../Components/AddBlog";
import EditBlog from "../Components/EditBlog";

const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blogList" element={<BlogList />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="editBlog/:id" element={<EditBlog />} />
          <Route path=":id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </>
  );
};
export default NavRoutes;
