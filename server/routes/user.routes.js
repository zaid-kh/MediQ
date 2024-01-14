import express from "express";
import {
  userLogin,
  userSignUp,
  getAllUsers,
  getUserById,
  getUserProfile,
} from "../controllers/userController.js";
import authMiddleware from "./auth.routes.js";
const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by ID
router.get("/:userId", getUserById);

// POST - create new user
router.post("/", userSignUp);

// POST - User Login
router.post("/login", userLogin);

//GET - User Profile
router.get("/profile/:id", authMiddleware, getUserProfile);

export default router;
