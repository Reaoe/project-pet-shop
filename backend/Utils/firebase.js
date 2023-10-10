const configFireBase = require("../config/FirebaseConfig");
const firebase = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
firebase.initializeApp(configFireBase);
const storage = getStorage();

const getLinkURL = async (file, name = "") => {
  file.originalname = `photo-${name}-${Date.now()}.jpeg`;

  const storageRef = ref(storage, "image/" + file.originalname);

  const metadata = {
    contentType: "image/jpeg",
  };

  const snapshot = await uploadBytes(storageRef, file.buffer, metadata);

  const linkURL = await getDownloadURL(snapshot.ref);

  return linkURL;
};
module.exports = getLinkURL;
