// admin.js
const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { userProfile } = require("../controllers/auth");
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');

router.get('/admin/isAdmin', isAuthenticated, isAdmin, (req, res) => {
  // Handle the request and send a response
  res.send('You are an admin!');
});

router.get('/allusers', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const users = await allUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/admin/user/edit/:id', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const updatedUser = await editUser(req.params.id, req.body);
    res.send(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/user/dashboard/edit/:id', isAuthenticated, async (req, res) => {
  try {
    const updatedUser = await editUser(req.params.id, req.body);
    res.send(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const deletedUser = await deleteUser(req.params.id);
    res.send(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;



/*

const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {userProfile } = require("../controllers/auth");
const {allUsers, singleUser, editUser, deleteUser}= require('../controllers/userController');

router.get('/admin/isAdmin',  isAuthenticated, isAdmin, userProfile);
router.get('/allusers', isAuthenticated, isAdmin, allUsers);
router.put('/admin/user/edit/:id', isAuthenticated, isAdmin, editUser);
router.put('/user/dashboard/edit/:id', isAuthenticated, editUser);
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

module.exports = router
*/