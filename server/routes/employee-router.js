const express = require('express')

const EmployeeCtrl = require('../controllers/employee-ctrl')

const router = express.Router()

router.post('/employee', EmployeeCtrl.createEmployee) // work on this first.
router.put('employee/:id', EmployeeCtrl.updateEmployee) // next
router.delete('/employee/:id',EmployeeCtrl.deleteMovie) // Delete data
