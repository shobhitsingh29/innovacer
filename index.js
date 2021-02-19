import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./db/index.js";
import { router as patientRouter } from "./routes/patient-router.js";
import path from "path";
import multer from "multer";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("hello ji");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("**",file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "text/csv") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/upload", upload.single("file"), (req, res, next) => {
  try {
    res.send(req.file);
  } catch (error) {
    console.error(error);
  }
});
app.use("/api", patientRouter);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

if (['production'].includes(process.env.NODE_ENV)) {

  app.use(express.static('client/build'));

  app.get('*', (req, res,next) => {
    if (!req.path.includes('api'))
      res.sendFile(
          path.join(path.resolve() ,'client/build/index.html'));
    else next();

})
}

app.listen(process.env.PORT || 4000 ,function(){
  console.log("up and running on port "+process.env.PORT);
});
