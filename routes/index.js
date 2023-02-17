const express = require('express');
const upload = require('../config/multer');
const { pictureController, findAll, remove } = require('../controllers/pictureController');

const router = express.Router();

router.post('/pictures', upload.single("file"), pictureController)
router.get('/pictures', findAll)
router.delete('/pictures/:id', remove)

module.exports = router;