import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

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

    try {
        // let transporter = nodemailer.createTransport({
        //     host: "smtp.office365.com",//"smtp-mail.outlook.com",
        //     port: 587,
        //     secure: false, // true for 465, false for other ports
        //     tls: {
        //         ciphers: 'SSLv3'
        //     },
        //     auth: {
        //         user: "tdibacco-prueba25watts@outlook.com", // variables de entorno
        //         pass: "Tomasdibacco25watts", // variables de entorno
        //     },
        // });
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587, //465
            secure: false,//true
            //     tls: {
            //         ciphers: 'SSLv3'
            //     },
            auth: {
                user: 'tomasdibacco@gmail.com',
                pass: `${process.env.PASS_TEST}`
            }
        })

        const mailOptions = {
            from: `STRONG WOOD`, //<${"tdibacco-prueba25watts@outlook.com"}>
            to: "tdibacco-prueba25watts@outlook.com", //strongwoodventas@gmail.com
            subject: "Nueva venta",
            // text: "prueba",
            html: contentHtml,
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Erro al enviar el correo:' + error);
                return res.status(500).json({ error: error });
            } else {
                console.log('Correo enviado:' + info.response);
                return res.status(200).json({ message: "Correo electrónico enviado con éxito" });
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al enviar el correo electrónico" });
    }
}