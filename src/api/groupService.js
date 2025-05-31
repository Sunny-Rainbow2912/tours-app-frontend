// === src/api/groupService.js ===
import axios from 'axios';

const API_URL = '/api/groups';

export const getGroups = () => axios.get(API_URL);
export const getGroupById = (id) => axios.get(`${API_URL}/${id}`);
export const createGroup = (group) => axios.post(API_URL, group);
export const updateGroup = (id, group) => axios.put(`${API_URL}/${id}`, group);
export const deleteGroup = (id) => axios.delete(`${API_URL}/${id}`);
