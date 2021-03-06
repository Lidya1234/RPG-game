
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Request from '../scenes/score';

require('jest-fetch-mock').enableMocks();

// eslint-disable-next-line no-unused-vars
const regeneratorRuntime = require('regenerator-runtime');

const responeJSON = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ],
};

it('returns the correct object', () => {
  fetch.mockResponse(responeJSON);

  async () => {
    const x = await new Request().getScores();
    expect(x).toEqual(responeJSON.result);
  };
});
