'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  // test() or it() do the same thing
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');
      // refer to jest documentation for the toBe method and expect etc...
    expect(response.status).toBe(200)
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('I am alive!');
  });

  test('handles success route', async () => {
    const response = await mockRequest.get('/success');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Success!!');
  });

  test('handles bad requests as expected', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(500);
  });

  test('handles not found', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });

});
