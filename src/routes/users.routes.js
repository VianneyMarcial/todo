const {Router} = require('express');
const {getAllUsers, getUserById, createUser, updateUser, delateUser} = require('../controllers/users.controller')

const router = Router();

router.get('./users', getAllUsers);

router.get('./user/:id', getUserById);

router.post('./users', createUser);

router.put('./users/:id', updateUser);

router.delete('./users/:id', delateUser);

module.exports = router;