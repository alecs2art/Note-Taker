const express = require("express");
const app = express();
const htmlroutes = require("./routes/htmlRoutes");
const apiroutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlroutes);
app.use("/api", apiroutes);



app.listen(PORT, () => {
    console.log("API server now on port ${PORT}!!");
});

