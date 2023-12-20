import axiosInstance from "./axios";

const getCourses = async () => {
  const res = await axiosInstance.get("/courses/details");
  console.log('aka',res)
  return res.data;
};

const login = async(data)=>{
  const res = await axiosInstance.post("/auth/login", data)
  return res.data;
}

const api = {
  getCourses,
  login
}

export default api