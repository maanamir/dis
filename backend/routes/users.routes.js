const express = require("express");
const router = express.Router();

const UserController = require('./../controllers/users.controllers');
const checkAuth = require('../middleware/check-auth');
const upload = require('./../config/upload');

// router.get("/",UserController.sampleUser);
router.get("/",UserController.getAll);
router.get("/:_id",UserController.getSingleUser);
router.get("/statistics/detail",UserController.getAllStatistics);
router.get("/getnextid/next",UserController.getNextId);
router.post("/",UserController.addUser);
router.put("/:_id", UserController.updateUser);
router.delete("/:_id", UserController.deleteUser);
router.put("/upload/:type/:id",upload.single('file'), UserController.uploadAvatar);

// router.get("/",checkAuth,UserController.sampleUser);
module.exports = router;
