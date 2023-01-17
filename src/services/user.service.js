const Users = require("../models/users.model");
const Courses = require("../models/courses.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: Courses,
          attributes: ["title"],
          as: "course",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;