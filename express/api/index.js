var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");

var app = express();
var router = express.Router();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

function unmatched(req, res) {
    res.redirect("/api/v1/");
}

router.use("/", indexRouter);
router.use("/users", usersRouter);

app.use("/api/v1", router);
app.use(unmatched);

module.exports = app;
