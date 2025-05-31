import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getEventById,
  createEvent,
  updateEvent,
} from '../../api/eventService';
import { getGroups } from '../../api/groupService';

export default function EventForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [event, setEvent] = useState({
    title: '',
    date: '',
    groupId: '',
  });

  useEffect(() => {
    loadGroups();
    if (id) loadEvent();
  }, [id]);

  const loadGroups = async () => {
    const data = await getGroups();
    setGroups(data);
  };

  const loadEvent = async () => {
    const data = await getEventById(id);
    setEvent({
      title: data.title,
      date: data.date,
      groupId: data.group.id,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: event.title,
      date: event.date,
      group: { id: event.groupId },
    };
    id ? await updateEvent(id, payload) : await createEvent(payload);
    navigate('/events');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Event' : 'Create Event'}</h2>

      <label>
        Title:
        <input name="title" value={event.title} onChange={handleChange} required />
      </label>

      <label>
        Date:
        <input
          type="datetime-local"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Group:
        <select name="groupId" value={event.groupId} onChange={handleChange} required>
          <option value="">-- Select Group --</option>
          {groups.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  );
}
