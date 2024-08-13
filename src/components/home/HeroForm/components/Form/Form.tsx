"use client"
//hooks
import { useState } from 'react'
//styles
import styles from '../../HeroForm.module.sass'
//types
import { initialFormProps, initialErrorProps } from './Form.model'

export const Form = () => {

    const initialForm: initialFormProps = {
        tipodeServicio: 'Servicio de Almacenaje',
        fechaServicio: "",
        firstName: "",
        email: "",
        phone: "",
        tyc: false
    }

    const [form, setForm] = useState(initialForm)
    //let errores: initialErrorProps = {}
    //const [errorsState, setErrorsState] = useState(errores)

    //console.log("Formulario", form)
    //Handle para actualizar los valores del form 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            fechaServicio: event.target.value
        });
    };

    //Handle para ir mapeando los errores 
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        //setErrorsState(validationsForm(form))
    };

    //Handle para Seleccionar el tipo de Servicio 
    const handleServicio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            tipodeServicio: event.target.value
        });
    };

    //Handle para Seleccionar si se leyo el Aviso de Privacidad o no
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            tyc: !form.tyc
        });
    }

    // /*VALIDACIONES*/
    // const validationsForm = (form: initialFormProps) => {
    //     let errors: initialErrorProps = {}

    //     /*Validacion Razon Social*/
    //     if (!form.razon_social.trim()) {
    //         errors.razon_social = 'Este campo es obligatorio'
    //     }
    //     /*Validacion Cedula Ciudadana*/
    //     const regexCCNovacio = /.+/;
    //     const regexCCCantidadDigitos = /^\d{4,10}$/;
    //     const regexCCSoloNumeros = /^\d+$/;
    //     const regexCCNoIniciarConCero = /^[1-9]\d*$/;
    //     const regexCCNoNueveDigitos = /^(?!\d{9}$)\d+$/;
    //     const regexCCNoEmepzarPor = /^[0-5]\d{3,9}$/;

    //     if (natural && form.type_identification === "CC" && !regexCCNovacio.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo es obligatorio'
    //     } else if (natural && form.type_identification === "CC" && !regexCCSoloNumeros.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo solo permite caracteres numéricos'
    //     } else if (natural && form.type_identification === "CC" && !regexCCNoIniciarConCero.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo no puede iniciar con 0'
    //     } else if (natural && form.type_identification === "CC" && !regexCCNoNueveDigitos.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo no permíte 9 dígitos'
    //     } else if (natural && form.type_identification === "CC" && !regexCCCantidadDigitos.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Ingrese de 4 a 10 caracteres numéricos y si tiene 10 dígitos no debe iniciar por 6,7,8 ó 9'
    //     } else if (natural && form.type_identification === "CC" && form.identification_natural.length === 10 && !regexCCNoEmepzarPor.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Ingrese de 4 a 10 caracteres numéricos y si tiene 10 dígitos no debe iniciar por 6,7,8 ó 9'
    //     }

    //     /*Validacion Pasaporte*/
    //     const regexPANovacio = /.+/;
    //     const regexPA = /^[a-zA-Z0-9]{6,16}$/;

    //     if (natural && form.type_identification === "PA" && !regexPANovacio.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo es obligatorio'
    //     } else if (natural && form.type_identification === "PA" && !regexPA.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Ingrese de 6 a 16 caracteres alfanuméricos y sin digito de veríficacion'
    //     }

    //     /*Validacion Cedula Extranjera*/
    //     const regexCENovacio = /.+/;
    //     const regexCE = /^[1-9]\d{4,6}$/;
    //     const regexCESoloNumeros = /^\d+$/;
    //     const regexCENoIniciarConCero = /^[1-9]\d*$/;

    //     if (natural && form.type_identification === "CE" && !regexCENovacio.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo es obligatorio'
    //     } else if (natural && form.type_identification === "CE" && !regexCESoloNumeros.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Ingrese solo caracteres numéricos'
    //     } else if (natural && form.type_identification === "CE" && !regexCENoIniciarConCero.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'No se aceptan documentos que inicen por 0'
    //     } else if (natural && form.type_identification === "CE" && !regexCE.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Ingrese de 5 a 7 caracteres numéricos'
    //     }
    //     /*Validacion NIT*/
    //     const regexNITNovacio = /.+/;
    //     const regexNITsoloNumeros = /^[0-9]+$/;
    //     const regexNITiniciarConNumeros = /^[7-9].*/;
    //     const regexNITNueveNumeros = /^(?!\d{9}$)\d+$/;
    //     const regexNITSoloDiezNumeros = /^\d{10}$/;

    //     if (!natural && form.type_identification === "NIT" && !regexNITNovacio.test(form.identification_juridica.trim())) {
    //         errors.identification_juridica = 'Este campo es obligatorio'
    //     } else if (!natural && form.type_identification === "NIT" && !regexNITsoloNumeros.test(form.identification_juridica.trim())) {
    //         errors.identification_juridica = 'El NIT solo contiene caracteres numéricos'
    //     } else if (!natural && form.type_identification === "NIT" && !regexNITiniciarConNumeros.test(form.identification_juridica.trim())) {
    //         errors.identification_juridica = 'El NIT debe iniciar por 7,8 o 9,debe tener 10 caracteres númericos,con digito de verificación'
    //     } else if (!natural && form.type_identification === "NIT" && !regexNITNueveNumeros.test(form.identification_juridica.trim())) {
    //         errors.identification_juridica = 'El NIT debe iniciar por 7,8 o 9,debe tener 10 caracteres númericos,con digito de verificación'
    //     } else if (!natural && form.type_identification === "NIT" && !regexNITSoloDiezNumeros.test(form.identification_juridica.trim())) {
    //         errors.identification_juridica = 'El NIT debe iniciar por 7,8 o 9,debe tener 10 caracteres númericos,con digito de verificación'
    //     }

    //     /*Validacion TI*/
    //     const regexTINovacio = /.+/;
    //     if (natural && form.type_identification === "TI" && !regexTINovacio.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo es obligatorio'
    //     }
    //     /*Validacion RUT*/
    //     const regexRUTNovacio = /.+/;
    //     if (natural && form.type_identification === "RUT" && !regexRUTNovacio.test(form.identification_natural.trim())) {
    //         errors.identification_natural = 'Este campo es obligatorio'
    //     }

    //     if (!usarDatos) {
    //         const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    //         if (form.email.length === 0) {
    //             errors.email = 'Este campo es obligatorio'
    //         } else if (!regexEmail.test(form.email.trim())) {
    //             errors.email = 'Ingrese un email validado'
    //         }
    //         const regexTel = /^\(?(3[0-9]{2}|4\d{2}|5\d{2}|6\d{2}|7\d{2})\)?[-.\s]?([2-9]\d{2})[-.\s]?(\d{4})$/
    //         if (form.telefono.length === 0) {
    //             errors.telefono = 'Este campo es obligatorio'
    //         } else if (!regexTel.test(form.telefono.trim())) {
    //             errors.telefono = 'Ingrese un número telefonico validado'
    //         }
    //         if (form.calle.length === 0) {
    //             errors.calle = 'Este campo es obligatorio'
    //         }
    //         if (form.municipio.length === 0) {
    //             errors.municipio = 'Este campo es obligatorio'
    //         }
    //         if (form.ciudad.length === 0) {
    //             errors.ciudad = 'Este campo es obligatorio'
    //         }
    //     }

    //     return errors
    // }



    //Handle de envio de Formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //setErrorsState(validationsForm(form))
        console.log("Formulario", form)
        //if (Object.keys(errorsState).length === 0 && form.razon_social !== "") { updateDataFacturacion(order.id, form) }
    }


    return (
        <form className={styles.ContainerForm} onSubmit={handleSubmit}>
            <div className={styles.title}>
                <span>Cotiza tu servicio de transporte y almacenaje</span>
            </div>
            <div className={styles.Form}>
                <div className={styles.bloque}>
                    <div className={styles.title}>
                        <span>Datos del servicio</span>
                    </div>
                    <div className={styles.containerInputs}>
                        <div className={styles.rowInputs}>
                            <div className={styles.containerInput}>
                                <label htmlFor='tipodeServicio'>Tipo de servicio</label>
                                <select
                                    id='tipodeServicio'
                                    className={styles.input}
                                    onChange={handleServicio}
                                    value={form.tipodeServicio}
                                >
                                    <option value="Servicio de Almacenaje">*Servicio de Almacenaje</option>
                                    <option value="Servicio de Transporte">*Servicio de Transporte</option>
                                </select>
                            </div>
                            <div className={styles.containerInput}>
                                <label>Fecha de servicio</label>
                                <input
                                    type='date'
                                    className={styles.input}
                                    placeholder='Seleccionar'
                                    onChange={handleFecha}
                                    value={form.fechaServicio}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bloque}>
                    <div className={styles.title}>
                        <span>Tus Datos</span>
                    </div>
                    <div className={styles.containerInputs}>
                        <div className={styles.rowInputs}>
                            <div className={styles.containerInput}>
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type='text'
                                    className={styles.input}
                                    placeholder='Nombre Completo'
                                    id="firtsName"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.rowInputs}>
                            <div className={styles.containerInput}>
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    type='email'
                                    className={styles.input}
                                    placeholder='ejemplo@mail.com'
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className={styles.containerInput}>
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type='tel'
                                    name="phone"
                                    id="phone"
                                    className={styles.input}
                                    placeholder='55 123 12345678'
                                    value={form.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bloque}>
                    <div className={styles.containerInputs}>
                        <div className={styles.rowInputs}>
                            <div className={styles.containerInputCheck}>
                                <input
                                    type='checkbox'
                                    className={styles.input}
                                    onChange={handleChecked}
                                    name="checkForm"
                                    id="checkForm"
                                    required
                                />
                                <label htmlFor="checkForm">Acepto que he leído el <b>Aviso de privacidad</b></label>
                            </div>
                            <div className={styles.containerInputButton}>
                                <input
                                    className={styles.button}
                                    type='submit'
                                    value="Cotizar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
