const express = require('express');
const router = express.Router();

const emplopyeecontroller = require('../controller/emp.controller');




router.post('/create', emplopyeecontroller.createEmployee);

router.get('/emplist', emplopyeecontroller.employeeList);

router.put('/update/:id', emplopyeecontroller.editEmployee);

router.delete('/delete/:id', emplopyeecontroller.deleteEmployee);

module.exports = router;