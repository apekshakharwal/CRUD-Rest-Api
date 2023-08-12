const db = require("../config/db.config")
const Student = db.student;
const { QueryTypes } = require("sequelize");



exports.create = async (req, res) => {

    try {
        Student.create({
            reg_id: req.body.reg_id,
            name: req.body.name,
            college_name: req.body.college_name,
            email: req.body.email,
            branch: req.body.branch,
            mobile_no: req.body.mobile_no,
            city: req.body.city
        })
            .then(async user => {
                console.log(`Student created Succesffully: ${user.name}`);
                res.status(200).json({ "success": 1, "message": `Student created Succesffully: ${user.name}` });
            })
            .catch(err => {
                console.log({ "message": err.message });
                res.status(200).json({ "success": 0, "message": err.message });
            });

    }
    catch (error) {
        res.status(200).json({ "message": error.message })
    }
}

exports.list = async (req, res) => {

    try {
        const student = await db.sequelize.query(`SELECT * FROM "tbl_students"  ORDER BY name`, { type: QueryTypes.SELECT });
        if (student.length != 0) {
            res.status(200).json({ "success": 1, data: student });
        }
        else {
            res.status(200).json({ "success": 0, "message": "Students Not found." });
        }
    }
    catch (error) {
        res.status(200).json({ "message": error.message })
    }
}

exports.edit = async (req, res) => {

    try {
        Student.findOne({
            where: {
                id: req.body.student_id
            }
        })
            .then(async student => {
                if (student) {
                    await Student.update({
                        reg_id: req.body.reg_id,
                        name: req.body.name,
                        college_name: req.body.college_name,
                        email: req.body.email,
                        branch: req.body.branch,
                        mobile_no: req.body.mobile_no,
                        city: req.body.city
                    },
                        {
                            where: { id: req.body.student_id }
                        })
                        .then(user => {
                            res.status(200).json({ "success": 1, "message": "student details updated successfully!" });
                        })
                        .catch(err => {
                            res.status(200).json({ "success": 0, "message": err.message });
                        });
                }
                else {
                    res.status(200).json({ "success": 0, "message": "student Not found." });
                }

            })
            .catch(err => {
                res.status(200).json({ "success": 0, "message": "student Not found." });
            });
    }
    catch (error) {
        res.status(200).json({ "message": error.message })
    }
}

exports.delete = async (req, res) => {

    try {
        await Student.findOne({
            where: {
                id: req.body.student_id
            }
        })
            .then(async user => {
                console.log(user);
                if (user) {

                    await Student.destroy(
                        {
                            where: { id: req.body.student_id }
                        })
                        .then(deleteuser => {
                            res.status(200).json({ "success": 1, "message": "Student data deleted successfully!" });
                        })
                        .catch(err => {
                            res.status(200).json({ "success": 0, "message": err.message });
                        });

                }
                else {
                    res.status(200).json({ "message": "User Not found." });
                }
            })
            .catch(err => {
                res.status(200).json({ "success": 0, "message": "User Not found." });
            });
    }
    catch (error) {
        res.status(200).json({ "message": error.message })
    }
}