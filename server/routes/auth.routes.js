import jwt from "jsonwebtoken";
import STATUS_CODE from "../constants/statusCode.js";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded.userId);

      req.user = await User.findById(decoded.userId).select("-password -email");

      next();
    } catch (error) {
      next(error);
    }
  } else {
    res.status(STATUS_CODE.UNAUTHORIZED);
    throw new Error("User is not authorized or token is missing");
  }

  if (!token) {
    res.status(STATUS_CODE.UNAUTHORIZED).send("no Token available");
  }
};

export default authMiddleware;
