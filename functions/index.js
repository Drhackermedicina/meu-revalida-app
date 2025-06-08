/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const functions = require("firebase-functions");

exports.apiExample = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send({ message: "Olá do backend!" });
});

// Define a região desejada (exemplo: us-central1)
exports.backendFunction = functions.region("us-central1").https.onRequest((req, res) => {
  res.send("Hello from us-central1!");
});
