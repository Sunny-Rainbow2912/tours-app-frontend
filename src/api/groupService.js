import axios from './axiosInstance';

const API_BASE = '/api/groups';

export const getGroups = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const getGroupById = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};

export const createGroup = async (group) => {
  const response = await axios.post(API_BASE, group);
  return response.data;
};

export const updateGroup = async (id, group) => {
  const response = await axios.put(`${API_BASE}/${id}`, group);
  return response.data;
};

export const deleteGroup = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
};
