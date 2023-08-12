const express = require('express');
const router = express.Router();

const studentcontroller = require('../controllers/student.controller');


router.post('/create', studentcontroller.create);

router.get('/list', studentcontroller.list);

router.post('/update', studentcontroller.edit);

router.post('/delete', studentcontroller.delete);

module.exports = router;