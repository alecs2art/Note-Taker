const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const path = require("path");

router.get('/notes', (req, res) => {

    let db = fs.readFileSync('db/db.json');

    db = JSON.parse(db);
    res.json(db);
});

router.post('/notes', (req, res) => {

    req.body.id = uuidv4();

    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db)
    db.push(req.body);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = router;


