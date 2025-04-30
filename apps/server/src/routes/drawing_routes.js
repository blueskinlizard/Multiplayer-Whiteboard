const db = require("../prisma_queries/queries.ts")
const express = require('express')
const redis = require('redis')

const cache = redis.createClient();
const router = express.router();
