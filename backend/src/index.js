import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dbconnection from "./dbconnection/db.js";
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
import userRegister from "./route/user.route.js";
app.use("/api/vi/user", userRegister);
dbconnection()
  .then(
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(`mongodb connection failed`, err));
