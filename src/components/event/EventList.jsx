import { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../../api/eventService';
import { Link } from 'react-router-dom';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (err) {
      console.error('Failed to load events', err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Delete this event?');
    if (!confirm) return;
    await deleteEvent(id);
    await loadEvents();
  };

  return (
    <div>
      <h2>Events</h2>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/events/new">+ Add Event</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.group?.name}</td>
              <td>
                <Link to={`/events/${event.id}`} style={{ marginRight: '0.5rem' }}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
