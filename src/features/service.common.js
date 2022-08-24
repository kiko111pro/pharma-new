import axios from "axios";

export const api = "https://pharma-house.herokuapp.com";

export const error = (e) => {
  return { status: "error", isSuccessful: false, message: e };
};
export const success = (data, isCached = false) => {
  return { status: "success", isSuccessful: true, data: data, isCached };
};

// export const getAuthHeaders = async () => {
//   return {
//     Authorization:
//       'Bearer ' + (await AsyncStorage.getItem(constants.KEY_AUTH_TOKEN)),
//   };
// };

export const setOfflineData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getOfflineData = async (key) => {
  const res = localStorage.getItem(key);
  return JSON.parse(res);
};

export const get = async (url, headers) => {
  try {
    let response = await axios.get(url, { headers });
    return success(response.data);
  } catch (e) {
    console.log(e);
    if (e.response?.data) {
      return error(e.response.data.statusMessage);
    }
    return error(e);
  }
};

export const post = async (url, data, headers) => {
  try {
    let response = await axios.post(url, data, { headers });
    return success(response.data);
  } catch (e) {
    if (e.response?.data) {
      return error(e.response.data.statusMessage);
    }
    return error(e);
  }
};

export const download = async (url, data, headers) => {
  try {
    let response = await axios.post(url, data, {
      headers,
      responseType: "blob",
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    if (e.response?.data) {
      return error(e.response.data.statusMessage);
    }
    return error(e);
  }
};

export const update = async (url, data, headers) => {
  try {
    let response = await axios.put(url, data, { headers });
    return success(response.data);
  } catch (e) {
    console.log("e", e);
    if (e.response?.data) {
      return error(e.response.data.statusMessage);
    }
    return error(e);
  }
};

export const del = async (url, headers) => {
  try {
    let response = await axios.delete(url, { headers });
    return success(response.data);
  } catch (e) {
    console.log(e);
    if (e.response?.data) {
      return error(e.response.data.statusMessage);
    }
    return error(e);
  }
};
