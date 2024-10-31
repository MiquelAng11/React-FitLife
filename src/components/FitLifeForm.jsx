import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
import { enviarDatosAPI } from '../api';
import styles from '../styles/FormStyles.module.css';

const FitLifeForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      tipoEntrenamiento: '',
      objetivos: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Email inválido').required('El email es obligatorio'),
      telefono: Yup.string().required('El teléfono es obligatorio'),
      direccion: Yup.string().required('La dirección es obligatoria'),
      ciudad: Yup.string().required('La ciudad es obligatoria'),
      codigoPostal: Yup.string().required('El código postal es obligatorio'),
    }),
    onSubmit: async (values) => {
      try {
        await enviarDatosAPI(values);
        alert('¡Registro exitoso!');
      } catch (error) {
        alert('Error al enviar el formulario. Inténtalo nuevamente.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Formulario de Registro - FitLife</h2>
      
      {/* Grupo de campos para los datos personales */}
      <div className={styles.section}>
        <h3>Datos Personales</h3>
        <PersonalInfo formik={formik} />
      </div>

      <ContactInfo formik={formik} />
      <TrainingPreferences formik={formik} />
      
      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};

export default FitLifeForm;
