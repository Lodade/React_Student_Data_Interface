const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.text());
app.use(express.static(`${__dirname}`));
app.listen(PORT);
console.log("Listening on port " + PORT);

app.get("/", function (req, res) {
    res.sendFile("main.html", { root: `${__dirname}` });
    console.log("Webpage served");
});
