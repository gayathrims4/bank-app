const express = require('express');
const bankModel = require('../model/BankList');
const app = express();
const bankRoute = express.Router();

// Get all student
bankRoute.route('/').get((req, res) => {
  bankModel.find().limit(1000)
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

bankRoute.route('/doLike').post((req, res) => {
  bankModel.findOneAndUpdate({ ifsc: req.body.ifsc }, { isLiked: req.body.isLiked }, { new: true })
    .then((result) => {
      bankModel.find().limit(1000)
        .then((result) => {
          res.json(result)
        }).catch((err) => {
          console.log(err)
          res.status(400).json(err)
        })
    }).catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
})
module.exports = bankRoute;

