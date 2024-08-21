import * as React from 'react';
import { text } from 'stream/consumers';

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
            height: '74px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        containeLogo: {
            width: '34%',
            margin: '20px 100px',
        },
        body: {
            fontFamily: 'Monserrat, sans-serif',
        },
        containerTitle: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            color: '#273ABE',
            fontSize: '32px',
        },
        containerInfoGeneral: {
            width: '100%',
            display: 'flex',
        },
        containerInfo: {
            width: '50%',
        },
        containerText: {
            width: '100%',
            color: '#464646',
            fontFamily: 'Monserrat, sans-serif',
            fontSize: '16x',
            fontWeight: '400',
            padding: '20px',
        },
        containerData: {
            width: '100%',
            color: '#464646',
            fontFamily: 'Monserrat, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
        },
        containerButton: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        },
        containerImg: {
            width: '50%',
        },
        footer: {
            background: '#E4FAFF',
            display: 'flex',
            JustifyContent: 'center',
            AlignItems: 'center',
            padding: '20px',
        },
        containerFooterText: {
            display: 'block',
            width: '34%',
        },
        footerText: {
            color: '#424242',
            fontSize: '12px',
            fontWeight: '400',
            TextAlign: 'center',
            margin: '0 45px',
        },
        containeSpace: {
            width: '33%',
        },
    };

    return (
        <body>
            <header style={styles.header}>
                <div style={styles.containeSpace}></div>
                <div style={styles.containeLogo}>
                    <img src="https://res.cloudinary.com/davhblw2l/image/upload/v1724204196/LogoTMH_dr0e9y.png" alt="THM Logística" width={114} height={38} />
                </div>
                <div style={styles.containeSpace}></div>
            </header>
            <div style={styles.body}>
                <div style={styles.containerTitle}>
                    <span style={styles.title}>Aquí tienes los datos de un futuro cliente 🎉</span>
                </div>
                <div style={styles.containerInfoGeneral}>
                    <div style={styles.containerInfo}>
                        <div style={styles.containerText}>
                            Aquí tienes la información más reciente sobre el nuevo registro, contáctalo para crear una nueva alianza.
                        </div>
                        <div style={styles.containerData}>
                            <p><strong>Nombre del cliente:</strong> {firstName}</p>
                            <p><strong>Tipo de servicio:</strong> {tipodeServicio}</p>
                            <p><strong>Fecha del servicio:</strong> {fechaServicio}</p>
                            <p>
                                <strong>Teléfono:</strong> {phone}
                            </p>
                            <p>
                                <strong>Correo electrónico:</strong> {email}
                            </p>
                        </div>
                        <div style={styles.containerButton}>
                            <a href="https://api.whatsapp.com/send?phone=5215510791481&text=%C2%A1Hola%2C%20TMH%20Log%C3%ADstica!%20%F0%9F%8C%9F%0A%0AEstoy%20listo%20para%20optimizar%20mi%20log%C3%ADstica%20y%20almacenaje.%20%C2%BFPodr%C3%ADan%20enviarme%20detalles%20sobre%20sus%20servicios%3F%20%F0%9F%93%A6%F0%9F%9A%9B" target='_blank'>
                                <button style={{ background: '#0C9AF2', color: 'white', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' }}>Contactar por teléfono</button>
                            </a>
                        </div>
                    </div>
                    <div style={styles.containerImg}>
                        <img src="https://res.cloudinary.com/davhblw2l/image/upload/v1724204137/box9_q1rrcq.png" alt="THM Logística" width={150} height={192} />
                    </div>
                </div>
            </div>
            <footer style={styles.footer}>
                <div style={styles.containeSpace}></div>
                <div style={styles.containerFooterText}>
                    <span style={styles.footerText}>THM Logística </span> <br />
                    <span style={styles.footerText}> Todos los derechos reservados</span>
                </div>
                <div style={styles.containeSpace}></div>
            </footer>
        </body>
    );
}
