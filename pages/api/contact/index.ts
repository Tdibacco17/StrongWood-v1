import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", phone = "", email = "", direction = "", product = "", pago = "" } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            service: process.env.EMAIL_SERVICE,
            secure: false,
            port: 587, // port for secure SMTP
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        let data = {
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_SENDER,
            subject: `${name} te envió un mensaje`,
            text: `
                nombre: ${name}
                email: ${email}
                telefono: ${phone}
                direccion: ${direction}
                producto: ${product}
                abona en ${pago}
            `,
        }

        const info = await transporter.sendMail(data);
        console.log('Correo enviado:', info.response);

        return res.status(200).json({ message: "Correo electrónico enviado con éxito" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al enviar el correo electrónico" });
    }
}