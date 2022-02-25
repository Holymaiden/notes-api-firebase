const fire = require("../../config/firebase");
const {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  Timestamp,
  updateDoc,
  deleteDoc,
  doc,
  where,
} = require("firebase/firestore/lite");

const allCatatan = async () => {
  let catatanDocs = await query(
    collection(fire, "catatan"),
    orderBy("updated_at", "desc")
  );
  let catatanData = await getDocs(catatanDocs).then((docs) => docs);
  return catatanData.docs.map((doc) => {
    return { [doc.id]: doc.data() };
  });
};

const byCategoryCatatan = async (category) => {
  let catatanDocs = await query(
    collection(fire, "catatan"),
    where("category", "==", category)
  );
  let catatanData = await getDocs(catatanDocs).then((docs) => docs);
  return catatanData.docs.map((doc) => {
    return { [doc.id]: doc.data() };
  });
};

const addCatatan = async (data) => {
  return await addDoc(collection(fire, "catatan"), {
    text: data.text,
    category: data.category,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
  })
    .then((doc) => doc.id)
    .catch((err) => err.message);
};

const updateCatatan = async (data, dataId) => {
  let catatan = doc(fire, "catatan", dataId);
  return await updateDoc(catatan, {
    text: data.text,
    category: data.category,
    updated_at: Timestamp.now(),
  })
    .then(() => catatan.id)
    .catch((err) => err.message);
};

const deleteCatatan = async (dataId) => {
  return deleteDoc(doc(fire, "catatan", dataId))
    .then(() => dataId)
    .catch((err) => err.message);
};

module.exports = {
  allCatatan,
  addCatatan,
  updateCatatan,
  deleteCatatan,
  byCategoryCatatan,
};
