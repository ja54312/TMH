import * as React from 'react';

interface EmailTemplateCotizacionProps {
    firstName: string
    tipodeServicio: string
    fechaServicio: string
    email: string
    phone: string
}

export const EmailTemplateCotizacion: React.FC<Readonly<EmailTemplateCotizacionProps>> = ({
    firstName,
    tipodeServicio,
    fechaServicio,
    email,
    phone,
}) => {

    const styles = {
        header: {
            background: '#E4FAFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '74px',
        },
        body: {},
        containerTitle: {},
        footer: {
            background: '#E4FAFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        },
        containerText: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerText: {
            width: '34%',
            color: '#424242',
            fontFamily: 'Monserrat, sans-serif',
            fontSize: '12px',
            fontWeight: '400',
        },
        containeSpace: {
            width: '33%',
        },
    };

    return (
        <body>
            <header style={styles.header}>
                <div>
                    <img src="https://thmlogistica.com/wp-content/uploads/2021/03/Logo-THM-Logistica-1.png" alt="THM Logística" />
                </div>
            </header>
            <div style={styles.body}>
                <div style={styles.containerTitle}>

                </div>
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
            <footer style={styles.footer}>
                <div style={styles.containeSpace}></div>
                <div style={styles.containerText}>
                    <span style={styles.footerText}>THM Logística</span>
                    <span style={styles.footerText}>Todos los derechos reservados</span>
                </div>
                <div style={styles.containeSpace}></div>
            </footer>
        </body>
    );
}
