import axios from "axios";

export const postApi = async (data) => {
  try {
    const res = await axios.post("http://localhost:3005/users", data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
