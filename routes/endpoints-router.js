const express = require("express");
const { getEndPoints } = require('./controllers/endpoints-controller');
const apiRouter = express.Router();
apiRouter.get("/", getEndPoints);