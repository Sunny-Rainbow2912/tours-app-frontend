import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGroupById, createGroup, updateGroup } from '../../api/groupService';

export default function GroupForm() {
  const [group, setGroup] = useState({ name: '', city: '', country: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getGroupById(id).then(setGroup);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateGroup(id, group);
    } else {
      await createGroup(group);
    }
    navigate('/groups');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit Group' : 'Create Group'}</h2>
      <label>
        Name:
        <input name="name" value={group.name} onChange={handleChange} required />
      </label>
      <label>
        City:
        <input name="city" value={group.city} onChange={handleChange} required />
      </label>
      <label>
        Country:
        <input name="country" value={group.country} onChange={handleChange} required />
      </label>
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  );
}
