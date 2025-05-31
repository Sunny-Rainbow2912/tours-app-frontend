import { Routes, Route, Navigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

import GroupManager from '../group/GroupManager';
import EventManager from '../event/EventManager';
import { LoginCallback } from '@okta/okta-react';


const ProtectedRoute = ({ children }) => {
  const { authState } = useOktaAuth();
  if (!authState || !authState.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default function PageLayout() {
  return (
    <Routes>
      <Route path="/groups/*" element={
        <ProtectedRoute>
          <GroupManager />
        </ProtectedRoute>
      } />
      <Route path="/events/*" element={
        <ProtectedRoute>
          <EventManager />
        </ProtectedRoute>
      } />
      <Route path="/login/callback" element={<LoginCallback />} />
    </Routes>
  );
}
