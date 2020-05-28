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

updateEmployee = async (req, res) => {
    const body = req.body
    
    if (!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Employee.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        
        employee.name = body.name
    })
}

deleteEmployee = async(req, res) => {
    await Employee.findOneAndDelete({ _id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(400).json({ success: true, error:err })
        }

        if (!employee){
            return res
                .status(404)
                .json({ success: false, error: `Employee not found` })
        }
        
        return res.staus(200).json({ success: true, data: employee })
    }).catch(err => console.log(err));
}

module.exports = {
    createEmployee
}