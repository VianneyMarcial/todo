const Courses = require("../models/courses.models");
const CoursesCategories = require("../models/courses-categories.models");
const Categories = require("../models/courses.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(todo) {
    try {
      const result = await Courses.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Courses.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: {
          model: CoursesCategories,
          as: "courses",
          attributes: ["id"],
          include: {
            model: Courses,
            as: "course",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;