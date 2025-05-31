
// === src/components/event/EventForm.jsx ===
import React, { useEffect, useState } from 'react';

function EventForm({ groupId, selectedEvent, onSubmit, clearForm }) {
  const [event, setEvent] = useState({ title: '', description: '', date: '' });

  useEffect(() => {
    if (selectedEvent) setEvent(selectedEvent);
  }, [selectedEvent]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(event);
    setEvent({ title: '', description: '', date: '' });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={event.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={event.description} onChange={handleChange} placeholder="Description" />
      <input name="date" type="date" value={event.date} onChange={handleChange} required />
      <button type="submit">{event.id ? 'Update' : 'Create'} Event</button>
    </form>
  );
}

export default EventForm;
