import STATUS_CODE from "../constants/statusCode.js";

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;
  let message = err.message || "Internal Server Error";

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    statusCode = STATUS_CODE.BAD_REQUEST;
    const errors = Object.values(err.errors).map((error) => error.message);
    message = { error: "Validation Error", errors };
  }

  res.status(statusCode).send({ message });
};

export default errorHandler;
