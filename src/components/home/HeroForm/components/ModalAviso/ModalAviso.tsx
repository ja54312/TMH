"use client"
//components
import classNames from 'classnames/bind';
//Styles
import styles from './ModalAviso.module.sass'

export const ModalAviso = ({ isOpenModal, closeModal }: any) => {

    const cx = classNames.bind(styles);

    const modalStyles = cx('visible', {
        'modal': isOpenModal,
    });

    return (
        <div className={modalStyles}>
            <div className={styles.modal_content}>
                <div className={styles.containerClose} >
                    <span className={styles.text}>Aviso de Privacidad</span>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                </div>
                <div className={styles.contentAviso}>
                    <span>AVISO DE PRIVACIDAD</span>

                    <p>
                        1. Responsable del Tratamiento de Datos Personales<br />
                        <br />
                        TMH Logística S.A. de C.V., con domicilio en Naucalpan, Estado de México, es el responsable del tratamiento de los datos personales que usted proporcione a través de nuestro formulario de cotización. Para cualquier consulta respecto a la protección de sus datos personales, puede contactarnos en info@thmlogistica.com .<br />
                        <br />
                        2. Datos Personales que Recabamos<br />
                        <br />
                        Para procesar su solicitud de cotización, recabamos los siguientes datos personales:<br />
                        • Nombre completo: para identificar al solicitante.<br />
                        • Correo electrónico: para enviarle la cotización y mantener comunicación.<br />
                        • Número de teléfono: para contactarle en relación con su solicitud.<br />
                        • Tipo de servicio requerido: para proporcionar una cotización adecuada a sus necesidades.<br />
                        <br />
                        3. Finalidades del Tratamiento de Datos<br />
                        <br />
                        Sus datos personales serán utilizados para los siguientes fines:<br />
                        • Elaboración de Cotización: Para generar una cotización precisa y acorde a los servicios que usted requiera.<br />
                        • Atención y Seguimiento: Para ofrecerle una atención personalizada y realizar un seguimiento adecuado de su solicitud.<br />
                        • Información y Promociones: Para enviarle información relevante sobre nuestros servicios y promociones, siempre que haya dado su consentimiento para recibir tales comunicaciones.<br />
                        <br />
                        4. Fundamento Legal para el Tratamiento<br />
                        <br />
                        El tratamiento de sus datos personales se basa en:<br />
                        • Cumplimiento de obligaciones contractuales: Derivadas de su solicitud de cotización y la posible relación comercial que de ello se derive.<br />
                        • Consentimiento del titular: Para el envío de información y promociones, cuando usted ha otorgado su consentimiento explícito.<br />
                        <br />
                        5. Transferencia de Datos<br />
                        <br />
                        TMH Logística S.A. de C.V. no realizará transferencias de sus datos personales a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con obligaciones legales o contractuales.<br />
                        <br />
                        6. Derechos del Titular de los Datos<br />
                        <br />
                        En términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, usted tiene derecho a:<br />
                        • Acceder a sus datos personales que poseemos y a conocer las condiciones del tratamiento.<br />
                        • Rectificar sus datos en caso de que sean inexactos o incompletos.<br />
                        • Cancelar sus datos cuando considere que no se requieren para las finalidades establecidas.<br />
                        • Oponerse al tratamiento de sus datos para fines específicos.<br />
                        <br />
                        Para ejercer estos derechos, debe presentar una solicitud en info@thmlogistica.com . Su solicitud deberá incluir:<br />
                        • Nombre completo del solicitante.<br />
                        • Descripción clara y precisa del derecho que desea ejercer.<br />
                        • Documentación que acredite su identidad o representación legal.<br />
                        <br />
                        7. Medidas de Seguridad<br />
                        <br />
                        TMH Logística S.A. de C.V. ha implementado medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales de accesos no autorizados, pérdida, alteración o destrucción. Sin embargo, ningún sistema de seguridad es infalible, por lo que le solicitamos estar atento a cualquier comunicación sospechosa relacionada con sus datos.<br />
                        <br />
                        8. Cambios al Aviso de Privacidad<br />
                        <br />
                        Este aviso de privacidad puede ser modificado en cualquier momento. Cualquier cambio será publicado en nuestro sitio web www.tmhlogistica.com , y le recomendamos revisarlo periódicamente para estar al tanto de las actualizaciones.<br />
                        <br />
                        9. Contacto para Consultas<br />
                        <br />
                        Para cualquier pregunta o duda respecto a este aviso de privacidad, o para presentar alguna queja, puede contactarnos en info@thmlogistica.com .<br />
                    </p>

                </div>
            </div>
        </div>
    )
}
