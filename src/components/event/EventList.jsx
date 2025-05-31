
// === src/components/event/EventList.jsx ===
import React from 'react';

function EventList({ events, onEdit, onDelete }) {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <strong>{event.title}</strong> on {event.date}
          <button onClick={() => onEdit(event)}>Edit</button>
          <button onClick={() => onDelete(event.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
