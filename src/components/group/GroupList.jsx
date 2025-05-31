import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGroups, deleteGroup } from '../../api/groupService';

export default function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    const data = await getGroups();
    setGroups(data);
  };

  const handleDelete = async (id) => {
    await deleteGroup(id);
    await loadGroups();
  };

  return (
    <div>
      <h2>Groups</h2>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/groups/new">+ Add Group</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.city}</td>
              <td>{group.country}</td>
              <td>
                <Link to={`/groups/${group.id}`}>Edit</Link>{' '}
                <button onClick={() => handleDelete(group.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
