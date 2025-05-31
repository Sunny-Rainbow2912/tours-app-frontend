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
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">JUG Tours</h1>
        <div className="auth-section">
          {authState?.isAuthenticated ? (
            <>
              <span>Welcome, {userInfo?.name}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}
