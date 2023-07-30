import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name = "", phone = "", email = "", direction = "", selections = "",
        paymentMethod = "", note = "", measures = "", imageData = "" } = req.body;
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
                        <li><strong>Producto: </strong>${selections.designSlug}-${selections.designItem}</li>
                        <li><strong>Abona en: </strong>${paymentMethod}</li>
                        ${selections.cardData
            .filter((item: { cardId: number, cardTitle: string, tableTitle: string }[]) => item.length > 0) // Filtra los elementos que tengan al menos un subItem
            .map((item: { cardId: number, cardTitle: string, tableTitle: string }[]) => {
                const tableTitle = item[0].tableTitle; // Toma el primer tableTitle en cada grupo
                const cardTitles = item.map((subItem: { cardId: number, cardTitle: string, tableTitle: string }) => subItem.cardTitle).join(', '); // Combina todos los cardTitle separados por comas
                return `<li><strong>${tableTitle}: </strong>${cardTitles}</li>`;
            })
            .join('')}
                    </ul>
                    <ul>
                        ${Object.entries(measures).map(([key, value]) => `<li><strong>${key}: </strong>${value}cm</li>`).join('')}
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
            host: `${process.env.EMAIL_SERVICE}`,
            port: 587, //465
            secure: false,//true
            //     tls: {
            //         ciphers: 'SSLv3'
            //     },
            auth: {
                user: `${process.env.EMAIL_USERNAME}`,
                pass: `${process.env.PASS_TEST}`
            }
        })

        const mailOptions = {
            from: `STRONG WOOD`, //<${"tdibacco-prueba25watts@outlook.com"}>
            to: `${process.env.EMAIL_SENDER}`, //strongwoodventas@gmail.com
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