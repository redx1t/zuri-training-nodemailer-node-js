# TASK

Task Objective: To send automated emails from your NodeJs app. Also to be able to implement solutions majorly by going through the documentation.

Task Description: Create a new NodeJs app or use one you already have to send an automated email to a Gmail account.

You are to use "Nodemailer" (the email sender package in NodeJs). So you will install it within your project and then send a mail to your Google mail account.

---

# DESCRIPTION

The project is using express and nodemailer to send mails via gmail oauth using google mail api v1

to install,

1. Introduce .env file on the base of the project with this details
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   GOOGLE_REFRESH_TOKEN=""
   GOOGLE_ACCESS_TOKEN=""
   MAIL_USERNAME=""
   MAIL_PASSWORD=""
2. run npm install, then npm run dev

To obtain the auth details, read more on OAUTH here: https://developers.google.com/identity/protocols/oauth2

# SCREENSHOT OF EMAILS SENT

![screenshot of emails sent](https://github.com/redx1t/zuri-training-nodemailer-node-js/blob/master/Screenshots/mails.PNG)

# SCREENSHOT OF SINGLE EMAIL SENT

![screenshot of emails sent](https://github.com/redx1t/zuri-training-nodemailer-node-js/blob/master/Screenshots/individual.PNG)
