import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';

function Binance() {
  const [accountData, setAccountData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  const fetchAccountData = async () => {
    setLoading(true); // Establecer el estado de carga en verdadero
    setError(null); // Reiniciar el error al iniciar la carga
    try {
      const response = await fetch('http://localhost:3000/binance'); // Asegúrate de que esta ruta coincida con tu backend
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la cuenta');
      }
      const data = await response.json();
      setAccountData(data.data); // Guarda solo los datos, no el mensaje
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Establecer el estado de carga en falso, independientemente del resultado
    }
  };

  return (
    <div className="bg-custom-bg-2 bg-cover h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={fetchAccountData}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Obtener Datos de Cuenta
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? ( // Mostrar el estado de carga
        <p>Cargando datos de la cuenta...</p>
      ) : accountData ? (
        <div className="flex justify-center items-center mt-4">
          <div className="bg-yellow-200 bg-opacity-50 shadow-md rounded-lg overflow-hidden max-w-lg w-full">
            <h2 className="text-xl font-bold p-4 bg-yellow-300">Datos de la cuenta de Binance</h2>

            {/* Sección de Comisiones */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Comisiones</h3>
              <p>Maker: {accountData.commissionRates.maker}</p>
              <p>Taker: {accountData.commissionRates.taker}</p>
              <p>Buyer: {accountData.commissionRates.buyer}</p>
              <p>Seller: {accountData.commissionRates.seller}</p>
            </div>

            {/* Sección de Estado de la Cuenta */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Estado de la Cuenta</h3>
              <p>Puede operar: {accountData.canTrade ? 'Sí' : 'No'}</p>
              <p>Puede retirar: {accountData.canWithdraw ? 'Sí' : 'No'}</p>
              <p>Puede depositar: {accountData.canDeposit ? 'Sí' : 'No'}</p>
            </div>

            {/* Sección de Tipo de Cuenta */}
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Tipo de Cuenta</h3>
              <p>{accountData.accountType}</p>
            </div>

            {/* Sección de Balances */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">Balances</h3>
              {accountData.balances.map((balance, index) => (
                <div key={index} className="flex justify-between">
                  <span>{balance.asset}</span>
                  <span>{balance.free} (Libre)</span>
                  <span>{balance.locked} (Bloqueado)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Binance };
