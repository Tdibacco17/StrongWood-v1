import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", phone = "", email = "", direction = "", product = "", paymentMethod = "", price = "", note = "" } = req.body;

    const contentHtml = `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO PEDIDO</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #555;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #555;
                font-weight: 500;
            }
    
            .order-summary {
                margin-bottom: 15px;
                color: #555;
            }
    
            .order-summary li {
                margin-bottom: 5px;
                color: #555;
            }
        
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                margin-bottom: 15px;
                text-align: left;
                padding-top: 20px;
            }

            .footer li {
                list-style-type: none;
                margin-bottom: 5px;
                color: #777;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>STRONG WOOD</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h3>Datos personales:</h3>
                    <ul>
                        <li><strong>Nombre: </strong>${name}</li>
                        <li><strong>Email: </strong><a href="mailto:${email}" class="link">${email}</a></li>
                        <li><strong>Teléfono: </strong><a href="https://wa.me/${phone}" class="link">${phone}</a></li>
                        <li><strong>Dirección: </strong>${direction}</li>
                    </ul>
                </div>
                <br></br>
                <div class="order-summary">
                    <h3>Resumen del pedido:</h3>
                    <ul>
                        <li><strong>Producto: </strong>${product}</li>
                        <li><strong>Abona en: </strong>${paymentMethod}</li>
                        <li><strong>Precio: </strong>$${price}</li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <li><strong>Nota: </strong>${note}</li>
            </div>
        </div>
    </body>
    
    </html>
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
            from: `StrongWood`, //<${"tdibacco-prueba25watts@outlook.com"}>
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