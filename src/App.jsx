import { useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import oktaAuth from './oktaAuth';

import Navbar from './components/layout/Navbar';
import PageLayout from './components/layout/PageLayout';

function App() {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || '/', { replace: true });
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Navbar />
      <PageLayout />
    </Security>
  );
}

export default App;
