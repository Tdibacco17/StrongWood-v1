import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";

import dotenv from 'dotenv';
dotenv.config();

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", phone = "", email = "", direction = "", product = "", pay = "" } = req.body;

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

    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    try {
        const accessToken = await oAuth2Client.getAccessToken()

        let transporter = nodemailer.createTransport({
            // @ts-ignore
            service: process.env.EMAIL_SERVICE,
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USERNAME,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            },
        });

        const mailOptions = {
            from: `STRONG WOOD <${process.env.EMAIL_USERNAME}>`,
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