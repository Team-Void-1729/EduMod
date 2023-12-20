import axiosInstance from "./axios";

const getCourses = async () => {
  const res = await axiosInstance.get("/courses/details");
  console.log('aka',res)
  return res.data;
};

export default getCourses