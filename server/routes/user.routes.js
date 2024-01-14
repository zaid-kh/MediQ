import express from "express";
import {
  userLogin,
  userSignUp,
  getAllUsers,
  getUserById,
  getUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by ID
router.get("/:userId", getUserById);

// POST - create new user
router.post("/", userSignUp);

// POST - User Login
router.post("/login", userLogin);

export default router;
