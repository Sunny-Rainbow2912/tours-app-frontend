// === src/components/group/GroupForm.jsx ===
import React, { useEffect, useState } from 'react';

function GroupForm({ onSubmit, selectedGroup, clearForm }) {
  const [group, setGroup] = useState({ name: '', city: '', state: '', country: '' });

  useEffect(() => {
    if (selectedGroup) setGroup(selectedGroup);
  }, [selectedGroup]);

  const handleChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(group);
    setGroup({ name: '', city: '', state: '', country: '' });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={group.name} onChange={handleChange} placeholder="Name" required />
      <input name="city" value={group.city} onChange={handleChange} placeholder="City" required />
      <input name="state" value={group.state} onChange={handleChange} placeholder="State" />
      <input name="country" value={group.country} onChange={handleChange} placeholder="Country" required />
      <button type="submit">{group.id ? 'Update' : 'Create'} Group</button>
    </form>
  );
}

export default GroupForm;