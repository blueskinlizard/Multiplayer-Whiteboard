const db = require("../prisma_queries/queries.js")
const express = require('express')
const redis = require('redis')

const cache = redis.createClient();
const router = express.Router();

module.exports = router;