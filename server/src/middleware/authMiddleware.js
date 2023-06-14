import { verify } from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authorization = req.header("authorization");

  if (!authorization) {
    console.log("Invalid Login");
    return res.status(401).send("You are not logged in");
  }

  const token = authorization.replace("Bearer ", "");
  const userData = verify(token, process.env.TOKEN_SECRET);

  req.user = userData;
  next();
};
