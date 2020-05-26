const Employee = require('../models/employee-model');

createEmployee = (req, res) => {
    const body = req.body;

    if (!body){
        return res.status(400).json({
            success: false,
            error: "You must provide an employee"
        })
    }

    const employee = new Employee(body);

    if (!employee){
        return res.status(400).json({ success: false, error: err })
    }

    employee
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: employee._id,
                message: 'Employee inserted!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Employee not created!"
            })
        })
}

module.exports = {
    createEmployee
}