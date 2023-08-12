module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("tbl_students", {
    reg_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    college_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    branch: {
      type: Sequelize.STRING,
    },
    mobile_no: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    }
  });
  return Student;
};
