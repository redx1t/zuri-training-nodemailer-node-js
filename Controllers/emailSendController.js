const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: "victormuthomik@gmail.com",
  to: "victormuthomik@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

exports.single_email = function (req, res) {
  //   console.log(process.env.MAIL_USERNAME);
  var text = "MESSAGE SENT SUCCESSFULLY";
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      text = "Error " + err;
    } else {
      text = "Email sent successfully";
    }
  });
  res.send(text);
};
