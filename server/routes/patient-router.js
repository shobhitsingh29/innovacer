import express from "express";
import multer from "multer";

import {
  createPatient,
  createPatients,
  deletePatient,
  getPatientById,
  getPatients,
  updatePatient,
  upload,
} from "../controllers/patient-ctrl.js";
import path from "path";
export const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("**", file);
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
const uploa = multer({ storage: storage, fileFilter: fileFilter });

router.post("api/upload", ()=>{
  debugger;
  uploa.single("file")
},upload);
router.post("/patient", createPatient);
router.post("/patients", createPatients);
router.put("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);
router.get("/patient/:id", getPatientById);
router.get("/patients", getPatients);
