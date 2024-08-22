import { EmailTemplateCotizacion } from '../../../components/template/Emails/SolicitudCotizacion/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { config } from '@/config/config';

const resend = new Resend(process.env.RESEND_API_KEY);
//const emailSender = config.isProd ? 'info@tmhlogistica.com' : 'ija54312@gmail.com'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tipodeServicio, fechaServicio, firstName, email, phone } = body;
        // Validar que todos los campos necesarios están presentes
        if (!tipodeServicio || !fechaServicio || !firstName || !email || !phone) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        } else {
            await resend.emails.send({
                to: ['info@tmhlogistica.com'],
                from: 'Acme <onboarding@resend.dev>',
                subject: 'Solicitud de Cotización',
                react: EmailTemplateCotizacion({ tipodeServicio, fechaServicio, firstName, email, phone }),
            });
        }


        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}