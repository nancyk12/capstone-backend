const express = require('express');
const router = express.Router();
const courseController = require('./users/controller/courseController');
const Course = require('./users/model/Course');

// Get all courses
router.get('/all-courses', courseController.getCourses);

// Get course by ID
router.get('/:id', courseController.getCourseById);

router.post('/add-course', async (req, res) => {
    try {
      const course = req.body;
      const newCourse = await Course.create(course);
      res.status(201).json(newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router;