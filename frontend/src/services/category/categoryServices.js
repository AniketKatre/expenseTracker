import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//get the token
const token = getUserFromStorage();
// console.log("TOKEN", token);

//Add Category
export const addCategoryAPI = async ({ type, name }) => {
  const response = await axios.post(
    `${BASE_URL}/category/create`,
    {
      type,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  //return promise
  return response;
};

// list of categories
export const listCategoriesAPI = async () => {
  const response = await axios.get(`${BASE_URL}/category/lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

//UPDATE Category
export const updateCategoryAPI = async ({ type, name, id }) => {
  const response = await axios.put(
    `${BASE_URL}/category/update/${id}`,
    {
      type,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  //return promise
  return response;
};

//DELETE Category
export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/category/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  //return promise
  return response;
};
