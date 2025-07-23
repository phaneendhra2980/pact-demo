const path = require('path');
const { Pact } = require('@pact-foundation/pact');
const getUser = require('./getUser'); // Assume user will stub this

const provider = new Pact({
  consumer: 'FrontendApp',
  provider: 'UserService',
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO'
});

describe('Pact with UserService', () => {
  beforeAll(() =>
    provider.setup().then(() =>
      provider.addInteraction({
        uponReceiving: 'a request for users',
        withRequest: { method: 'GET', path: '/users' },
        willRespondWith: {
          status: 200,
          body: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
        }
      })
    )
  );

  it('should receive the user list from the provider', async () => {
    const users = await getUser();
    expect(users).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  });

  afterAll(() => provider.verify().then(() => provider.finalize()));
});