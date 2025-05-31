
// === src/components/group/GroupList.jsx ===
import React from 'react';

function GroupList({ groups, onEdit, onDelete, onSelect }) {
  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id}>
          <strong>{group.name}</strong> — {group.city}, {group.country}
          <button onClick={() => onSelect(group)}>Events</button>
          <button onClick={() => onEdit(group)}>Edit</button>
          <button onClick={() => onDelete(group.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default GroupList;