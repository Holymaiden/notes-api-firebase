const express = require("express");
const router = express.Router();

const {
  catatanAll,
  catatanAdd,
  catatanUpdate,
  catatanDelete,
  catatanByCategory,
} = require("../src/controller/catatan.controller");

router.get("/", catatanAll);
router.get("/:category", catatanByCategory);
router.post("/", catatanAdd);
router.put("/:id", catatanUpdate);
router.delete("/:id", catatanDelete);

module.exports = router;
