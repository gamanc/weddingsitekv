/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.sendTelegramMessage = functions.firestore
  .document("guests/{docId}")
  .onWrite(async (snapshot, context) => {
    const data = snapshot.after.data();

    const guestsCollection = admin.firestore().collection("guests");

    try {
      const querySnapshot = await guestsCollection.get();
      let totalAdults = 0;
      let totalKids = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        totalAdults += data.confirmedAdults || 0;
        totalKids += data.confirmedKids || 0;
      });

      const message = `🤖: ${data.name} has ${
        data.willAttend === "yes" ? "confirmed" : "declined"
      } the invitation to the wedding. \n${
        data.willAttend === "yes"
          ? `Adults: ${data.confirmedAdults}\nKids: ${data.confirmedKids}\n`
          : ""
      }${
        data.message ? `They wanted to say: \n _${data.message}_` : ""
      }\n\n*Confirmed Attendees Balance*\nAdults: ${totalAdults}\nKids: ${totalKids}\n*Total Attendees: ${
        totalAdults + totalKids
      }*\n🤓📝`;

      const telegramApiToken = process.env.BOT_TOKEN;
      const chatId = process.env.CHANNEL_ID;

      const telegramApiUrl = `https://api.telegram.org/bot${telegramApiToken}/sendMessage`;

      await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
        parse_mode: "markdown",
      });

      console.log("Telegram message sent successfully.");
    } catch (error) {
      console.error("Error sending Telegram message:", error);
    }
  });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
