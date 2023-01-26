const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const db = require("./models");
const corsOptions = require("./configs/corsOptions")
const errorMiddleware = require("./middlewares/error.middleware")

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});
require("./routers")(app);
app.use(errorMiddleware)
const PORT = process.env.PORT || 49148;
app.listen(PORT,()=>{
    console.log("Server Çalışıyor "+PORT)
})