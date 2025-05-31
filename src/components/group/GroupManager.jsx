import { Routes, Route } from 'react-router-dom';
import GroupList from './GroupList';
import GroupForm from './GroupForm';

export default function GroupManager() {
  return (
    <Routes>
      <Route index element={<GroupList />} />
      <Route path="new" element={<GroupForm />} />
      <Route path=":id" element={<GroupForm />} />
    </Routes>
  );
}
