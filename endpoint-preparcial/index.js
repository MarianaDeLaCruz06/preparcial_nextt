const jsonServer = require("json-server");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const rwRoutes = require("./routes.json");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


app.set("Secret", "SECRET_TEST");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(jsonServer.rewriter(rwRoutes));

app.use(middlewares);

app.use((req, res, next) => {
  if (req.method === "DELETE") {
    console.log(req);
    return res.status(405).send({
        message: "Method not allowed.",
      });
  } else {
    if (req.path === "/login" && req.method === "POST") {
      getToken(req, res);
    }
    isAuthorized(req, res, next);
  }
});

app.use(router);
app.listen(8000, () => {
  console.log("JSON Server is running on 8000");
});

function isAuthorized(req, res, next) {
  var token = req.headers["authorization"];
  // decode token
  if (token) {
    token  = token.substring(7, token.length)
    jwt.verify(token, app.get("Secret"), (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "invalid token" });
      } else {
        req.decoded = decoded;
        return next();
      }
    });
  } else {
    // if there is no token
    return res.status(401).send({
      message: "No token provided.",
    });
  }
}

function getToken(req, res) {
  if (req.body.username === "user_test") {
    if (req.body.password === "user_pass") {
      const payload = {
        check: true,
      };
      var token = jwt.sign(payload, app.get("Secret"), {
        expiresIn: 1440, // expires in 24 hours
      });
      res.json({
        message: "Authentication Successful ",
        token: token,
      });
    } else {
      res.status(401).json({
        error: "Invalid Password",
      });
    }
  } else {
    res.status(401).json({
      error: "Please provide valid credentials",
    });
  }
}
