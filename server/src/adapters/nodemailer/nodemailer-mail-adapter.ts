  
import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f188c626a2786e",
        pass: "08870c1a1fa804"
    }
});
  
  export class NodemailerMailAdapter implements MailAdapter {
    async sendMain({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
            from: 'ShandlerTech feedget <oi@feedget.com>',
            to: 'ShandlerTech <shandler@gmail.com>',
            subject,
            html: body,
        });
    }

}