// src/oktaConfig.js
 const oktaConfig ={
  clientId: '0oaoyybr8kytUHVCH5d7',
  issuer: 'https://dev-14663133.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};


export default oktaConfig;