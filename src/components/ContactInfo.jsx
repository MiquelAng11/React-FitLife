import React from 'react';
import styles from '../styles/FormStyles.module.css';

const ContactInfo = ({ formik }) => (
  <div className={styles.section}>
    <h3>Información de Contacto</h3>
    <label>Dirección</label>
    <input
      type="text"
      name="direccion"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.direccion}
    />
    {formik.touched.direccion && formik.errors.direccion && <p className={styles.error}>{formik.errors.direccion}</p>}

    <label>Ciudad</label>
    <input
      type="text"
      name="ciudad"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.ciudad}
    />
    {formik.touched.ciudad && formik.errors.ciudad && <p className={styles.error}>{formik.errors.ciudad}</p>}

    <label>Código Postal</label>
    <input
      type="text"
      name="codigoPostal"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.codigoPostal}
    />
    {formik.touched.codigoPostal && formik.errors.codigoPostal && <p className={styles.error}>{formik.errors.codigoPostal}</p>}
  </div>
);

export default ContactInfo;
