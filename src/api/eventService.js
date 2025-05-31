// === src/api/eventService.js ===
import axios from 'axios';
import oktaAuth from '../oktaAuth'

const API_URL = '/api/events';

const authHeaders = async () => ({
  headers: {
    Authorization: `Bearer ${await oktaAuth.getAccessToken()}`
  }
});
console.log(oktaAuth);
console.log(await authHeaders());
const authState = await oktaAuth.authStateManager.getAuthState();
console.log('Is authenticated:', authState?.isAuthenticated);


export const getEvents = () => axios.get(API_URL);
export const getEventsByGroup = (groupId) => axios.get(`${API_URL}/group/${groupId}`);
export const getEventById = (id) => axios.get(`${API_URL}/${id}`);
export const createEvent = async (groupId, event) => axios.post(`/api/groups/${groupId}`, event, await authHeaders());


export const updateEvent = (id, event) => axios.put(`${API_URL}/${id}`, event);
export const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`);
