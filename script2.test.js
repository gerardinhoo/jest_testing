process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const fetch = require('node-fetch');
const swapi = require('./script2');

// Note: This api is not working as intends

it('calls swapi api to get people', () => {
  expect.assertions(1) //Always use expect.assertions and return for asynchronous tests
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
  })
})

it('calls swapi api to get people with promise', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5);
  })
})