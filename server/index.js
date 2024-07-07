import express from "express";
import cors from "cors";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import blogsRouter from "./routes/blogs.routes.js";
// import * as routes from "./routes/router.js"

config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST", "GET", "DELETE", "PATCH"]
}));
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use("/users",usersRouter);
app.use("/blogs", blogsRouter);

app.listen(3000, () => {
  console.log("server running");
});
