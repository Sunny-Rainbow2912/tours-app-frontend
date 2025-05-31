import { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

export default function LoginRedirect() {
  const { oktaAuth } = useOktaAuth();

  useEffect(() => {
    oktaAuth.signInWithRedirect();
  }, [oktaAuth]);

  return <p>Redirecting to login...</p>;
}
