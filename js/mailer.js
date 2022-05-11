var nodemailer = require("nodemailer");

/* Maildienstleister wird angelegt +
 Authetifizierungsoptionen*/
var transporter = nodemailer.createTransport({
    service: "google",
    auth: {
        user: "tomelitsch@googlemail.com",
        pass: "password"
    }
});
// Enthalten Sender, Empfänger, Subject und Body
var mailOptions = {
    // eigene Mail
    from: "tomelitsch@googlemail.com",

    // Ziel Mail
    to: "dummy@googlemail.com",
    subject: "Testmail via Node.js",
    text: "Mailbody",
};
// Absenden-Funktion
transporter.sendMail(mailOptions, function(error, info){
    if (error)
    console.log(error);
    else 
    console.log("Erfolgreich -> " +info.response);

});