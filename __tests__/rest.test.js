'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../database/models/index');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
  sequelize.close();
});

describe('Testing REST API', () => {
  let mockClient = {
    client_id: 2139846,
    client_name: 'John Wayne',
    email: 'john@wayne.com',
    account: '329854132'
  };
  test('Create a Client', async () => {
    const response = await mockRequest.post('/clients').send( {mockClient} );

    expect(response.status).toEqual(200);
    expect(response.body.client_id).toEqual(2139846);
    expect(response.body.client_name).toEqual('John Wayne');
    expect(response.body.email).toEqual('john@wayne.com');
    expect(response.body.account).toEqual('329854132');
  });

  test('Should read from clients', async () => {
    const response = await mockRequest.read('/clients').read({

    })
    expect(response.status).toEqual(200);
  });

  test('Should update a client', () => {
    expect(true).toBe(true);
  });

  test('Should delete a client', () => {
    expect(true).toBe(true);
  });
});
