import React from 'react';
import styles from '../styles/FormStyles.module.css';

const TrainingPreferences = ({ formik }) => (
  <div className={styles.section}>
    <h3>Preferencias de Entrenamiento</h3>
    <label>Tipo de Entrenamiento</label>
    <select
      name="tipoEntrenamiento"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.tipoEntrenamiento}
    >
      <option value="">Selecciona una opción</option>
      <option value="fuerza">Fuerza</option>
      <option value="cardio">Cardio</option>
      <option value="flexibilidad">Flexibilidad</option>
    </select>
    {formik.touched.tipoEntrenamiento && formik.errors.tipoEntrenamiento && <p className={styles.error}>{formik.errors.tipoEntrenamiento}</p>}

    {/* Campo condicional basado en el tipo de entrenamiento */}
    {formik.values.tipoEntrenamiento === 'fuerza' && (
      <>
        <label>Objetivos de Fuerza</label>
        <textarea
          name="objetivos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.objetivos}
          placeholder="Ej. Aumentar masa muscular, mejorar resistencia..."
        />
      </>
    )}
  </div>
);

export default TrainingPreferences;
