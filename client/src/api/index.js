import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const insertPatient = (payload) => api.post(`/patient`, payload);
export const uploadCsv = (payload) => api.post(`/uploadCsv`, payload);
export const getAllPatients = () => api.get(`/patients`);
export const updatePatientById = (id, payload) =>
  api.put(`/patient/${id}`, payload);
export const deletePatientById = (id) => api.delete(`/patient/${id}`);
export const getPatientById = (id) => api.get(`/patient/${id}`);

const apis = {
  insertPatient,
  getAllPatients,
  updatePatientById,
  deletePatientById,
  getPatientById,
  uploadCsv,
};

export default apis;
