const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

router.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// we can Add more CRUD operations here...

module.exports = router;
