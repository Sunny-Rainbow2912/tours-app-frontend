export const oktaConfig = {
  issuer: 'https://dev-14663133.okta.com/oauth2/default',  // ✅ use your actual domain
  clientId: '0oaozdedfe4HOJcUM5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};
