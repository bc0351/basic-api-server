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
});

describe('Testing REST API', () => {

  test('Create an animal', async() => {
    let response = await mockRequest.post('/animals').send({
      name: 'fido',
      species: 'dog',
      gender: 'male',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('fido');
    expect(response.body.species).toEqual('dog');
    expect(response.body.gender).toEqual('male');
  });

  test('Should read from animals', () => {
    let response = await mockRequest.get('/animals').send({
      name: 'fido',
      species: 'dog',
      gender: 'male',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('fido');
    expect(response.body.species).toEqual('dog');
    expect(response.body.gender).toEqual('male');
  });

  test('Should update an animal', () => {
    expect(true).toBe(false);
  });

  test('Should delete an animal', () => {
    expect(true).toBe(false);
  });
});
