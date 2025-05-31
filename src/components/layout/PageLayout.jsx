
// === src/App.jsx ===
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {Security, LoginCallback, SecureRoute} from '@okta/okta-react';
import {OktaAuth} from '@okta/okta-auth-js';
import oktaConfig from '../../oktaConfig';

import GroupManager from '../group/GroupManager';
import EventManager from '../event/EventManager';
import Login from '../login/Login';

const oktaAuth = new OktaAuth(oktaConfig);

function PageLayout() {
    const navigate = useNavigate();
  return (
    
        <Security oktaAuth={oktaAuth}
          restoreOriginalUri={async (_oktaAuth, originalUri) => {
             navigate(originalUri || '/', { replace: true });
  }}
        >
            <h1 className="text-3xl font-bold mb-6">JUG Tours Admin</h1>
            <Routes>
                <Route path="/" element={<Navigate to="/groups" />} />
                <Route path="/groups" element={<GroupManager />} />
                <Route path="/events" element={<EventManager />} />
                <Route path="/groups/:groupId/events" element={<EventManager />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Security>
    
  
  );
}

export default PageLayout;
