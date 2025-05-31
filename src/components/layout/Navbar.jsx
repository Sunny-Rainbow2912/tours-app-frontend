import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { oktaAuth, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.getUser().then(setUserInfo);
    } else {
      setUserInfo(null);
    }
  }, [authState, oktaAuth]);

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => oktaAuth.signOut();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <div>
        <Link to="/groups" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '20px' }}>
          JUG Tours
        </Link>
        {authState?.isAuthenticated && (
          <>
            <Link to="/groups" style={{ marginRight: '1rem' }}>Groups</Link>
            <Link to="/events">Events</Link>
          </>
        )}
      </div>

      <div>
        {authState?.isAuthenticated ? (
          <>
            <span style={{ marginRight: '0.5rem' }}>Welcome, {userInfo?.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
}
