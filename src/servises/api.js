import axios from "axios";

// make api for data.
const API_URL = "http://127.0.0.2:4001/users";

// make function for getBlogs.
export const getBlogs = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error Occure while calling getBlogs api", error.message);
  }
};

// make functon for addBlog.
export const addBlog = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error Occure while calling addBlog api", error.message);
  }
};

//make function to get single blog.
export const getBlog = async (data) => {
  try {
    return await axios.get(`${API_URL}`, data);
  } catch (error) {
    console.log("Error Occure while calling getBlog api", error.message);
  }
};
// edit blog
export const editBlog = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`,data);
  } catch (error) {
    console.log("Error Occure while calling editBlog api", error.message);
  }
};
// delete blog
export const deleteBlog = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error Occure while calling deleteBlog api", error.message);
  }
};
