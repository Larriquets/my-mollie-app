import React, { useEffect, useState } from 'react';
import createMollieClient from '@mollie/api-client';

const MollieConnectionTest = () => {
  const [methods, setMethods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testMollieConnection = async () => {
      try {
        const mollieClient = createMollieClient({
          apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM'
        });

        const response = await mollieClient.methods.all();

        setMethods(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    testMollieConnection();
  }, []);

  return (
    <div>
      <h2>Prueba de conexión a la API de Mollie</h2>
      {error ? (
        <p>Error al conectar a la API de Mollie: {error}</p>
      ) : (
        <div>
          <p>Conexión exitosa a la API de Mollie</p>
          <p>Métodos de pago disponibles:</p>
          <ul>
            {methods.map(method => (
              <li key={method.id}>{method.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MollieConnectionTest;
