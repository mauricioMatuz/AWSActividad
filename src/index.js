const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");

app.set("port", process.env.PORT || 8000);
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.urlencoded({ extend: false }));
app.use(express.json());
app.use(cors());

//rutas
app.use(require("./routes/rutas"));
app.use("/api/book", require("./routes/book"));

app.listen(app.get("port")),
  () => console.log(`Example app listening on port ${port}!`);
