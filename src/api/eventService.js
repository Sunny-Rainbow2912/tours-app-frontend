import axios from './axiosInstance';

const API_BASE = '/api/events';

export const getEvents = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};

export const createEvent = async (event) => {
  const response = await axios.post(API_BASE, event);
  return response.data;
};

export const updateEvent = async (id, event) => {
  const response = await axios.put(`${API_BASE}/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
  };