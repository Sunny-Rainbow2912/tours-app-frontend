import { Routes, Route } from 'react-router-dom';
import EventList from './EventList';
import EventForm from './EventForm';

export default function EventManager() {
  return (
    <Routes>
      <Route index element={<EventList />} />
      <Route path="new" element={<EventForm />} />
      <Route path=":id" element={<EventForm />} />
    </Routes>
  );
}
