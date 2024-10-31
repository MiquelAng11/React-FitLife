import React from 'react';

const PersonalInfo = ({ formik }) => (
  <div className="personal-info">
    <label>Nombre</label>
    <input
      type="text"
      name="nombre"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.nombre}
    />
    {formik.touched.nombre && formik.errors.nombre && <p className="error">{formik.errors.nombre}</p>}

    <label>Email</label>
    <input
      type="email"
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
    />
    {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

    <label>Teléfono</label>
    <input
      type="text"
      name="telefono"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.telefono}
    />
    {formik.touched.telefono && formik.errors.telefono && <p className="error">{formik.errors.telefono}</p>}
  </div>
);

export default PersonalInfo;
