const express = require("express");
require("dotenv").config();
const router = express.Router();
// import routes
const todosRoute = require("./routes/todos");
const cors = require("cors");
// Running express server

//const { expressCspHeader, INLINE, NONE, SELF } = require("express-csp-header");
const app = express();

//8000
const port = process.env.PORT || 3000;
// other app.use() options ...
/* app.use(
  expressCspHeader({
    policies: {
      "default-src": [expressCspHeader.NONE],
      "img-src": [expressCspHeader.SELF],
    },
  })
); */

// route middlewares
//app.use("/api", todoRoutes);
app.use(cors());
app.use(express.json());

app.use("/todos", todosRoute);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
