const { Verifier } = require('@pact-foundation/pact');
require('dotenv').config();

describe('Pact Verification', () => {
  it('validates the expectations of FrontendApp', () => {
    return new Verifier({
      provider: 'UserService',
      providerBaseUrl: 'http://localhost:3001',
      pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
      pactBrokerToken: process.env.PACT_BROKER_TOKEN,
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      consumerVersionSelectors: [{ tag: 'dev', latest: true }]
    }).verifyProvider();
  });
});