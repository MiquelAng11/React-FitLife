export const enviarDatosAPI = async (datos) => {
    try {
      const respuesta = await fetch('https://api.fitlife.com/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (!respuesta.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error al enviar datos a la API:', error);
      throw error; 
    }
  };
  