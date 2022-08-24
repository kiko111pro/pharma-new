import { api, post } from "../service.common";

const addProduct = async (data) => {
  //need auth headers
  const url = `${api}/api/product/addproduct`;
  const form = new FormData();
  const entries = Object.entries(data);
  entries.forEach((item) => form.append(item[0], item[1]));

  const res = await post(url, form);
  return res;
};
