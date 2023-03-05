require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./dbConn");
const crudRoutes = require("./routes/crudRoutes");

// set the client port for incoming requests
const app = express();
const PORT = process.env.PORT || 3000;

// database connection
connection();



// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// routes
app.use("/api/cruds", crudRoutes);
//app.use("/api/auth", authRoute);

// new code to handle middleware requests from react to the server
// const { createProxyMiddleware } = require('http-proxy-middleware');

// app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));




// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));



/*



const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//import path from 'path';
const errorHandler = require("./middleware/error");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const crudRoutes = require("./routes/crudRoutes");
const noteRoutes = require("./routes/noteRoutes");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const corsOptions = require('./config/cors-options');
const Message = require("./models/msgSchema");


mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));


  app.use(logger);
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());
  app.use('/', express.static(path.join(__dirname, 'public')));
  app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' });
    } else {
      res.type('txt').send('404 Not Found');
    }
  });

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
  })
);
app.use(cors());

app.post("/message", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const hours = req.body.hours;
    const position = req.body.position;
    const education = req.body.education;
    const years = req.body.years;
    const experience = req.body.experience;
    const project = req.body.project;
    const criminal = req.body.criminal;
    const refrences = req.body.refrences;
    const resume = req.body.resume;

    const sendMsg = new Message({
      name: name,
      email: email,
      phone: phone,
      hours: hours,
      position: position,
      education: education,
      years: years,
      experience: experience,
      project: project,
      criminal: criminal,
      refrences: refrences,
      resume: resume,
    });

    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    res.status(400).send(error);
  }
});

// routes
app.use("/api/cruds", crudRoutes);
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/root", rootRoutes);
app.use("/api/users", userRoutes);


app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});


/*
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./dbConn");
const crudRoutes = require("./routes/crudRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

const connection = require("./dbConn");
// database connection
connection();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// routes
app.use("/api/cruds", crudRoutes);
//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));




*/ 