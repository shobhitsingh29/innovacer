import Patient from "../models/patient-model.js";

export const createPatient = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a patient",
    });
  }
  const patient = new Patient(body);

  if (!patient) {
    return res
      .status(400)
      .json({ success: false, error: "You must provide a patient" });
  }
  try {
    await patient.save();
    return res.status(201).json({
      success: true,
      id: patient._id,
      message: "Patient created!",
    });
  } catch (e) {
    return res.status(400).json({
      e,
      message: "Patient not created!",
    });
  }
};

export const upload = async (req, res) => {
  try {
    res.send(req.file);
  } catch (error) {
    console.error(error);
  }
};

export const uploadCsv = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a patient",
    });
  }

const arr=Object.keys(body)[0].split('\n')

  for (let i=1;i<arr.length;i++){
    console.log(arr[i]);
    var obj={};

    var newArr=arr[i].split(',');
    obj['name']=newArr[0];
    obj['age']=newArr[1];
    obj['gender']=newArr[2];
    debugger;
      const patient = new Patient(obj);
    try {
      await patient.save();
    } catch (e) {
      return res.status(400).json({
        e,
        message: "Patient not created!",
      });
    }
  }
};


export const updatePatient = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Patient.findOne({ _id: req.params.id }, async (err, patient) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Patient not found!",
      });
    }
    patient.name = body.name;
    patient.age = body.age;
    patient.gender = body.gender;
    try {
      await patient.save();
      return res.status(200).json({
        success: true,
        id: patient._id,
        message: "Patient updated!",
      });
    } catch (e) {
      return res.status(404).json({
        e,
        message: "Patient not updated!",
      });
    }
  });
};

export const deletePatient = async (req, res) => {
  await Patient.findOneAndDelete({ _id: req.params.id }, (err, patient) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!patient) {
      return res
        .status(404)
        .json({ success: false, error: `Patient not found` });
    }

    return res.status(200).json({ success: true, data: patient });
  }).catch((err) => console.log(err));
};

export const getPatientById = async (req, res) => {
  await Patient.findOne({ _id: req.params.id }, (err, patient) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!patient) {
      return res
        .status(404)
        .json({ success: false, error: `Patient not found` });
    }
    return res.status(200).json({ success: true, data: patient });
  }).catch((err) => console.log(err));
};

export const getPatients = async (req, res) => {
  await Patient.find({}, (err, patients) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!patients.length) {
      return res
        .status(404)
        .json({ success: false, error: `Patient not found` });
    }
    return res.status(200).json({ success: true, data: patients });
  }).catch((err) => console.log(err));
};
