var express = require("express");
var router = express.Router();

const client = require("../db/client");

router.get("/", async function (req, res, next) {
    const conn = await client.connect();

    const db = conn.db("example");
    const collection = db.collection("users");

    const users = await collection.find().toArray();

    res.json(users);
});

module.exports = router;
