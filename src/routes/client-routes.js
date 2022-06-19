'use strict';

const express = require('express');
const { ClientModel } = require('../../database/models');
const {validatePath} = require('../middleware/validator')
const router = express.Router();

router.post('/clients/new', async (req, res, next) => {
  try {
    console.log(req.body);
    let client = req.body;
    let response = await ClientModel.create(client);
    console.log(response);
    res.status(200).send(response);
    response => res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/clients/all', async (req, res, next) => {
  try {
    console.log(req.body);
    let response = await ClientModel.findAll({});
    console.log(response);
    res.status(200).send(response);
    response => res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/clients/get', async (req, res, next) => {
  try {
    console.log(req.body);
    let { where } = req.body;
    let response = await ClientModel.findOne({where});
    console.log(response);
    res.status(200).send(response);
    response => res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/clients/update', async (req, res, next) => {
  try {
    let params = req.body;
    let response = await ClientModel.update(params.update, {where: {...params.where}});
    res.status(200).send(response);
    response => res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/clients/delete', async (req, res, next) => {
  try {
    console.log(req.body);
    let { id } = req.body;
    let response = await ClientModel.destroy({where: {id: `${id}`}});
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get('/', validatePath);
router.get('*', validatePath)

module.exports = router;
