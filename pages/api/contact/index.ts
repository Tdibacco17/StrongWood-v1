import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, phone, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: 587,
            secure: false,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_SENDER,
            subject: `${name} te envió un mensaje`,
            text: `
                nombre= ${name}
                email= ${email}
                telefono= ${phone}
                ${message}
            `,
        });

        console.log('Message sent: ' + info.response);
        return res.status(200).json({ message: "Correo electrónico enviado con éxito" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al enviar el correo electrónico" });
    }
}