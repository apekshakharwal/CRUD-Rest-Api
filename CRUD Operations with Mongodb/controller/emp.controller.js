const Employee = require("../model/emp.model");


exports.createEmployee = async (req, res) => {

    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation,
        mobile_no: req.body.mobile_no
    })

    try {
        const emp = await employee.save()
        res.status(200).json({ "success": 1, "message": "Employee Created Successfully", data: emp });
    }
    catch (error) {
        res.status(200).json({ "success": 0, "message": error.message })
    }
}

exports.employeeList = async (req, res) => {

    try {
        const emp = await Employee.find({})
        res.status(200).json({ "success": 1, "data": emp });
    }
    catch (error) {
        res.status(200).json({ "success": 0, "message": error.message })
    }
}

exports.editEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const emp = await Employee.findByIdAndUpdate(id, req.body);
        if (!emp) {
            return res.status(404).json({ "success": 0, "message": `cannot find any employee with ID ${id}` })
        }
        const updatedemp = await Employee.findById(id);
        res.status(200).json({ "success": 1, "message": "Employee Updated Successfully", data: updatedemp });
    }
    catch (error) {
        res.status(200).json({ "success": 0, "message": error.message })
    }
}

exports.deleteEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const emp = await Employee.findByIdAndDelete(id);
        if (!emp) {
            return res.status(404).json({ "success": 0, "message": `cannot find any employee with ID ${id}` })
        }
        res.status(200).json({ "success": 1, "message": "Employee Deleted Successfully", data: emp });
    }
    catch (error) {
        res.status(200).json({ "success": 0, "message": error.message })
    }
}