const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const newMessage = require("./routes/new-message");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/new", newMessage);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`port running at ${PORT}`);
});
