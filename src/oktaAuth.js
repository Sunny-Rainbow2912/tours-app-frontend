import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';

export const oktaAuth = new OktaAuth(oktaConfig);
