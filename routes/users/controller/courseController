const Course = require('../model/Course');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'courses not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};