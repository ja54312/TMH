import * as React from 'react';

interface EmailTemplateProps {
    body: {
        tipodeServicio: string
        fechaServicio: string
        firstName: string
        email: string
        phone: string
        tyc: boolean
    }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    body: {
        tipodeServicio,
        fechaServicio,
        firstName,
        email,
        phone,
    },
}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <h2>Haz solicitado informacion sobre: {tipodeServicio}</h2>
        <h3>Fecha de Servicio: {fechaServicio}</h3>
        <p>
            <strong>Email:</strong> {email}
        </p>
        <p>
            <strong>Phone:</strong> {phone}
        </p>
        <p>
            Gracias por contactarnos, pronto nos pondremos en contacto contigo.
        </p>
    </div>
);
