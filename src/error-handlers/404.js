'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function notFoundHandler (req, res, next) {
  let response = await res.status(404).send(response);
}

module.exports = notFoundHandler;
