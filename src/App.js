import React from 'react';
import FitLifeForm from './components/FitLifeForm';
import styles from './styles/FormStyles.module.css';

function App() {
  return (
    <div className={styles.appBackground}>
      <h1 className={styles.header}>¡Únete a FitLife!</h1>
      <p className={styles.subHeader}>
        Completa el formulario para unirte a nuestro viaje hacia una vida más saludable.
      </p>
      <FitLifeForm />
    </div>
  );
}

export default App;
