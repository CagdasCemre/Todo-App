const path = require("path");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

const todoRoutes = require("./routes/todos")

app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, function() {
    console.log("APP IS RUNNING ON PORT 3000");
});