'use strict';

const express = require('express');
const { AnimalsModel } = require('../../collections');
const router = express.Router();

router.post('/animals', async (req, res, next) => {
  let animal = req.body;
  console.log(req.body);

  let response = await AnimalsModel.create(animal);
  res.status(200).send(response);
});

router.get('/animals', async (req, res, next) => {
  let animal = req.body;
  console.log(req.body);

  let response = await AnimalsModel.read(animal);
  res.status(200).send(response);
});

router.get('/animals/:id', async (req, res, next) => {
  let animals = req.body;
  console.log(req.body);

  let response = await AnimalsModel.read(animals);
  res.status(200).send(response);
});

router.put('/animals/:id', async (req, res, next) => {
  let animal = req.body;
  console.log(req.body);

  let response = await AnimalsModel.update(animal);
  res.status(200).send(response);
});

router.delete('/animals/:id', async (req, res, next) => {
  let animal = req.body;
  console.log(req.body);

  let response = await AnimalsModel.destroy(animal);
  res.status(200).send(response);
});

module.exports = router;
