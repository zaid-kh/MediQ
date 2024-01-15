import STATUS_CODE from "../constants/statusCode.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { faker } from "@faker-js/faker";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(STATUS_CODE.OK).send(users);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(STATUS_CODE.NOT_FOUND).send("User not found");
            throw new Error("User not found");
        }
        res.status(STATUS_CODE.OK).send(user);
    } catch (error) {
        next(error);
    }
};

export const userSignUp = async (req, res, next) => {
    const { username, email, password, dateOfBirth, country, gender } =
        req.body;
    try {
        const existingUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (existingUser) {
            res.status(STATUS_CODE.CONFLICT).json({
                error: "Conflict",
                message: "Username or email is already in use",
            });
            throw new Error("Username or email is already in use");
        }
        const emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (!emailRegEx.test(email)) {
            return res.status(STATUS_CODE.CONFLICT).send({
                error: "Conflict",
                message: `${email} is not a valid email address!`,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            profilePicture: faker.image.avatarLegacy(),
            dateOfBirth,
            country,
            gender,
        });
        await newUser.save();

        res.status(STATUS_CODE.CREATED).send({
            message: "User registered successfully",
            newUser,
        });
    } catch (error) {
        next(error);
    }
};

export const userLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        console.log("user:", user);

        if (!user) {
            res.status(STATUS_CODE.NOT_FOUND).send("User not found");
            throw new Error("User not found");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(STATUS_CODE.UNAUTHORIZED).send("Incorrect password");
            throw new Error("Incorrect password");
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(STATUS_CODE.OK).send({
            message: "Login successful",
            token,
            user,
        });
    } catch (error) {
        next(error);
    }
};

export const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            res.status(STATUS_CODE.NOT_FOUND).send("User not found");
            throw new Error("User not found");
        }
        res.status(STATUS_CODE.OK).send({
            message: "User access Confirm!",
            user,
        });
    } catch (error) {
        next(error);
    }
};
