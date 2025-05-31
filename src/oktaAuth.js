import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';

export default new OktaAuth(oktaConfig);
