const {
  allCatatan,
  addCatatan,
  updateCatatan,
  deleteCatatan,
  byCategoryCatatan,
} = require("../models/catatanModel");
const Response = require("../response/response");

const catatanAll = async (req, res) => {
  try {
    let datas = await allCatatan();
    return Response.success(res, datas);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const catatanByCategory = async (req, res) => {
  try {
    let datas = await byCategoryCatatan(req.params.category);
    return Response.success(res, datas);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const catatanAdd = async (req, res) => {
  let data = req.body;
  try {
    data = await addCatatan(data);
    return Response.success(res, data);
  } catch (error) {
    return Response.error(res, error.message);
  }
};

const catatanUpdate = async (req, res) => {
  let data = req.body;
  try {
    data = await updateCatatan(data, req.params.id);
    return Response.success(res, data);
  } catch (error) {
    return Response.error(res, error.message);
  }
};

const catatanDelete = async (req, res) => {
  try {
    data = await deleteCatatan(req.params.id);
    return Response.success(res, data);
  } catch (error) {
    return Response.error(res, error.message);
  }
};

module.exports = {
  catatanAll,
  catatanAdd,
  catatanUpdate,
  catatanDelete,
  catatanByCategory,
};
