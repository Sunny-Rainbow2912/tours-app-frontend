
// === src/components/event/EventManager.jsx ===
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventsByGroup, createEvent, updateEvent, deleteEvent, getEvents } from '../../api/eventService';
import EventList from './EventList';
import EventForm from './EventForm';

function EventManager() {
  const { groupId } = useParams();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    loadEvents();
  }, [groupId]);
  
  const loadEvents = () => {
    if(groupId){
      getEventsByGroup(groupId)
        .then((res) => setEvents(res.data))
        .catch(console.error);
    } else {
      getEvents()
        .then((res) => setEvents(res.data))
        .catch(console.error);
    }
   };

  const handleEventSubmit = async (event) => {
    try {
      if (event.id) {
        await updateEvent(event.id, event);
      } else {
        await createEvent({ ...event, group: { id: groupId } });
      }
      loadEvents();
      setSelectedEvent(null);
    } catch (err) {
      console.error('Failed to save event:', err);
    }
  };

  const handleEventDelete = async (id) => {
    try {
      await deleteEvent(id);
      loadEvents();
    } catch (err) {
      console.error('Failed to delete event:', err);
    }
  };

  return (
    <>
      <h2>Events</h2>
      <EventForm
        groupId={groupId}
        selectedEvent={selectedEvent}
        onSubmit={handleEventSubmit}
        clearForm={() => setSelectedEvent(null)}
      />
      <EventList
        events={events}
        onEdit={setSelectedEvent}
        onDelete={handleEventDelete}
      />
    </>
  );
}

export default EventManager;
