import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import QRCode from 'react-qr-code'; // Importa react-qr-code

export const CreateaddressM = () => {
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreateAddress = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/create-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_usuario: 'TU_ID_USUARIO' }), // aca hay que cambiarlo para que reciba el id de usuario
            });

            const data = await response.json();

            if (response.ok) {
                setAddress(data.address); // Guardar la dirección generada
            } else {
                setError(data.error || 'Error al crear la dirección.');
            }
        } catch (error) {
            setError('Error de conexión. Por favor, inténtelo nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="bg-custom-bg-2 bg-cover h-screen flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-80">
                    <h2 className="text-xl font-bold text-center mb-4">Crear Dirección</h2>
                    <form onSubmit={handleCreateAddress} className="space-y-4">
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
                        >
                            {loading ? 'Creando...' : 'Crear Dirección'}
                        </button>
                    </form>
                    {address && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-center">Dirección creada:</h3>
                            <p className="text-gray-600 text-center">{address}</p>
                            <QRCode value={address} size={128} className="mt-2 mx-auto" />
                        </div>
                    )}
                    {error && (
                        <div className="mt-4 p-3 rounded-md bg-red-100 text-red-700">
                            <p className="text-sm">{error}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
