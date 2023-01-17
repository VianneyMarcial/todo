const { Router } = require("express");
const {
  getAllCourses,
  getCoursesById,
  createCourses,
  updateCourses,
  deleteCourses,
  getCoursesWithCategories,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/:id", getCoursesById);

router.get("/courses/:id/categories", getCoursesWithCategories);

router.post("/courses", createCourses);

router.put("/courses/:id", updateCourses);

router.delete("/courses/:id", deleteCourses);

module.exports = router;