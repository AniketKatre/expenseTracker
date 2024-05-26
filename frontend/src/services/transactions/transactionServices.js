import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//get the token
const token = getUserFromStorage();
// console.log("TOKEN", token);

//Add Transaction
export const addTransactionAPI = async ({
  type,
  amount,
  category,
  date,
  description,
}) => {
  const response = await axios.post(
    `${BASE_URL}/transaction/create`,
    {
      type,
      amount,
      category,
      date,
      description,
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
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const response = await axios.get(`${BASE_URL}/transaction/lists`, {
    params: { category, type, startDate, endDate },
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
