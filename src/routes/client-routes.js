'use strict';

const express = require('express');
const { Client } = require('../../database/models/client')

const router = express.Router();

router.post('/clients', async (req, res, next) => {
  let client = req.body;
  await Client.create(client)
    .then(response => res.status(200).send(response))
    .catch(error => {console.log(error); res.status(500).send(error);});
})

module.exports = router;
