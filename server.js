const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;/// 'mongodb://localhost:27017/expendita';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const displayusersRouter= require("./routes/displayusers");
const requestRouter=  require("./routes/clients");
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/displayusers", displayusersRouter);
app.use("/request", requestRouter);
//displayusers
// app.route("/").get((req, res) => {
//   res.send(
//     "Hello World, All free course and college projects available at BesidesCollege.org"
//   );
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
