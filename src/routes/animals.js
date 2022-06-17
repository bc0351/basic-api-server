'use strict';

const express = require('express');
const { AnimalsModel } = require('../../collections/animals.schema');
const router = express.Router();

router.post('/animals', async (req, res, next) => {
  let animal = req.body;
  console.log(req.body);
  let response = await AnimalsModel.create(animal);
  res.status(200).send(response);
});

router.get('/animals', async (req, res, next) => {
  let animals = req.body;
  console.log(req.body);
  let response = await AnimalsModel.read(animals, {where: {1:1}});
  res.status(200).send(response);
});

router.get('/animals/:id', async (req, res, next) => {
  let {id} = req.params;
  let response = await AnimalsModel.read(id, { include: AnimalsModel });
  console.log(req.body);
  res.status(200).send(response);
});

router.put('/animals/:id', async (req, res, next) => {
  let {id} = req.params;
  console.log(req.body);
  let response = await AnimalsModel.update({ where: { id }});
  res.status(200).send(response);
});

router.delete('/animals/:id', async (req, res, next) => {
  let { id } = req.params;
  console.log(req.body);
  let response = await AnimalsModel.destroy({where: {id}});
  res.status(200).send(response);
});

module.exports = router;
