import { api, get } from "../service.common";

const getSupplierById = async (id) => {
  const url = `${api}/api/supplier/details?id=${id}`;
  const res = await get(url);
  return res;
};

const supplierService = {
  getSupplierById,
};

export default supplierService;
