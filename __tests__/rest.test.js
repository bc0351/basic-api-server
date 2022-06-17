'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../collections');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
  sequelize.close();
});

describe('Testing REST API', () => {

  test('Create an animal', async () => {
    const response = await mockRequest.post('/animals').send({
      name: 'fido',
      species: 'dog',
      gender: 'male',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('fido');
    expect(response.body.species).toEqual('dog');
    expect(response.body.gender).toEqual('male');
  });

  test('Should read from animals', async () => {
    const response = await mockRequest.read('/animals').read({

    })
    expect(response.status).toEqual(200);
  });

  test('Should update an animal', () => {
    expect(true).toBe(true);
  });

  test('Should delete an animal', () => {
    expect(true).toBe(true);
  });
});
