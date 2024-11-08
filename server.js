const express = require("express");
const app = express();
const path = require("path");
const users = require("./routers/users")
const bodyparser = require('body-parser');
const port = 5000;

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) =>{
    console.log(req.url);
    next()
})

app.get("/", (req, res, next) => {
    res.sendFile("index.html");
});

app.use("/connect", users)

app.listen(port, function () {
    console.log(`server is run on port ${port}`);
});