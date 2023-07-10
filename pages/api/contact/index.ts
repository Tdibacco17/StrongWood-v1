import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import dotenv from 'dotenv';
dotenv.config();

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", phone = "", email = "", direction = "", product = "", pay = "" } = req.body;

    console.log(process.env, ".env")
    const contentHtml = `
        <h2>STRONG WOOD</h2>
        <h4>Datos personales</h4>
        <div>
            <ul>   
                <li>Nombre: ${name}</li>
                <li>Email: ${email}</li>
                <li>Telefono: ${phone}</li>
                <li>Dirección: ${direction}</li>  
            </ul>
        </div>
        <br></br>
        <ul>
            <li>Quiere comprar el producto: <strong>${product}</strong></li>
            <li>Abona en <strong>${pay}</strong></li>
        </ul>
    `

    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: 587,
            secure: false, // true for 465, false for other ports
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_USERNAME, // variables de entorno
                pass: process.env.EMAIL_PASSWORD, // variables de entorno
            },
        });

        const mailOptions = {
            from: `STRONG WOOD <${process.env.EMAIL_SENDER}>`,
            to: process.env.EMAIL_SENDER,
            subject: "Nueva venta",
            // text: "prueba",
            html: contentHtml,
        }

        const result = await transporter.sendMail(mailOptions)
        console.log('Correo enviado:', result.response);

        return res.status(200).json({ message: "Correo electrónico enviado con éxito" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al enviar el correo electrónico" });
    }
}