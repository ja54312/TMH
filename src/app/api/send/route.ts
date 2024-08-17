import { TipodeServicios } from './../../../components/home/ServiciosTab/components/TIpodeServicios/TipodeServicios';
import { EmailTemplateCotizacion } from '../../../components/template/Emails/SolicitudCotizacion/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    //console.log('req', req);
    const body = await req.json();
    //console.log('body', body);
    const { tipodeServicio, fechaServicio, firstName, email, phone } = body;
    try {
        await resend.emails.send({
            to: ['ija54312@gmail.com'],
            from: 'Acme <onboarding@resend.dev>',
            subject: 'Solicitud de Cotización',
            react: EmailTemplateCotizacion(tipodeServicio, fechaServicio, firstName, email, phone),
        });


        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}