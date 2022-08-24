import { api, get } from "../service.common";

const getSearchResults = async (params) => {
  const url = `${api}/api/product/search`;
  const res = await get(url, { params });
  return res;
};

const getProductById = async (id) => {
  const url = `${api}/api/product/details?id=${id}`;
  const res = await get(url);
  return res;
};

export default {
  getSearchResults,
  getProductById,
};
