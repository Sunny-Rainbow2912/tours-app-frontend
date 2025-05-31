// === src/components/group/GroupManager.jsx ===
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupForm from './GroupForm';
import GroupList from './GroupList';
import {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup
} from '../../api/groupService';

function GroupManager() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupForEdit, setSelectedGroupForEdit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = () => {
    getGroups().then(res => setGroups(res.data)).catch(console.error);
  };

  const handleGroupSubmit = async (group) => {
    try {
      if (group.id) {
        await updateGroup(group.id, group);
      } else {
        await createGroup(group);
      }
      loadGroups();
      setSelectedGroupForEdit(null);
    } catch (err) {
      console.error('Failed to save group:', err);
    }
  };

  const handleGroupDelete = async (id) => {
    try {
      await deleteGroup(id);
      setSelectedGroup(null);
      loadGroups();
    } catch (err) {
      console.error('Failed to delete group:', err);
    }
  };

  return (
    <>
      <GroupForm
        onSubmit={handleGroupSubmit}
        selectedGroup={selectedGroupForEdit}
        clearForm={() => setSelectedGroupForEdit(null)}
      />
      <GroupList
        groups={groups}
        onEdit={(group) => setSelectedGroupForEdit(group)}
        onDelete={handleGroupDelete}
        onSelect={(group) => navigate(`/groups/${group.id}/events`)}
      />
    </>
  );
}

export default GroupManager;