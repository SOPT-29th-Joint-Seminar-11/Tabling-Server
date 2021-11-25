const admin = require("firebase-admin");
const serviceAccount = require("./joint-seminar-tabling-firebase-adminsdk-g4im5-69afb96a88.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};