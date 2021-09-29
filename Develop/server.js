const express = require("express");
const app = express();
const htmlroutes = require("./routes/htmlRoutes");
const apiroutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlroutes);
app.use("/api", apiroutes);



app.listen(3001, () => {
    console.log("API server now on port 3001!!");
});

