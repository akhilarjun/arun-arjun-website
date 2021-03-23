import Nodemailer from 'nodemailer';

const genUID = () => {
    return Math.random().toString(36).substr(2,6);
}

export default async (req, res) => {
    const randomToken = genUID();
    const encryptedToken = Buffer.from(randomToken).toString('base64');

    const transporter = Nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akhilarjuncms@gmail.com',
            pass: process.env.GMAIL_APP_PWD
        }
    });

    const mailOptions = {
        from: 'akhilarjuncms@gmail.com',
        to: process.env.TO_EMAIL_ID,
        subject: 'Requesting access to Admin panel of https://www.arunarjun.com',
        html: `
            <div style="padding:10px;background:#333;color:#eee;">
            Please enter the following OTP to access your admin panel.
            <div style="text-align:center;font-weight:900;font-family:sans-serif;font-size:25px">${randomToken}</div>
            <br/><hr/><br/>
            <div>If this was not you, trying to access your admin panel. Please reach out to Akhil &lt;akhilparjun@gmail.com&gt; </div>
            </div>
        `
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log('Email Sent')
        res.status(200).json({
            token: encryptedToken,
            emailSent: 'OK'
        });
    })
}