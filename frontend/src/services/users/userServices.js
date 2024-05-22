import { BASE_URL } from "../../utils/url";
import axios from "axios";

// LOGIN
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });

  // return promise
  return response.data;
};
