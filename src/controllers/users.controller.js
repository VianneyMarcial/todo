const CourseServices = require("../services/course.services");

const getAllCourse = async (req, res, next) => {
  try {
    const course = await CourseServices.getAll();
    res.json(course);
  } catch (error) {
    next(error);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const newCourse = {
      title,
      description,
      status,
    };
    const course = await CourseServices.create(newCourse);
    return res.json(course);
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const { status, id } = req.body;
    const updateCourse = {
      status,
    };
    const course = await CourseServices.update(updateCourse, id);
    return res.json(course);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.body;
    const course = await CourseServices.delete(id);
    return res.json(course);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};