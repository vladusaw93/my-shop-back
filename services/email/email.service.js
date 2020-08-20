const nodeMailer = require("nodemailer");
const path = require("path");

const EmailTemplate = require("email-templates");
const httpTemplates = require("../../emailTemplates");
const {
    ROOT_EMAIL_SERVICE,
    ROOT_EMAIL_LOGIN,
    ROOT_EMAIL_PASS,
} = require("../../configs");

const transporter = nodeMailer.createTransport({
    service: ROOT_EMAIL_SERVICE,
    auth: {
        user: ROOT_EMAIL_LOGIN,
        pass: ROOT_EMAIL_PASS,
    },
});

const emailTemplate = new EmailTemplate({
    message: null,
    views: {
        root: path.join(process.cwd(), "emailTemplates"),
    },
});

class EmailService {
    async sendMail(userMail, action, context) {
        try {
            const templateInfo = httpTemplates[action];
            const html = await emailTemplate.render(
                templateInfo.templateFileName,
                { ...context },
            );

            const mailOptions = {
                from: "our Team",
                to: userMail,
                subject: templateInfo.subject,
                html,
            };

            return transporter.sendMail(mailOptions);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new EmailService();
