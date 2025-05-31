import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { oktaAuth } from './oktaAuth';
import Navbar from './components/layout/Navbar';
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <BrowserRouter>
      <Security oktaAuth={oktaAuth}>
        <Navbar />
        <PageLayout />
      </Security>
    </BrowserRouter>
  );
}

export default App;
