import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { authUser } from '../services/services.users/authUser';
import { useLocation } from 'react-router-dom';

export default function MargaritasTransfer() {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, loading: authLoading } = authUser();
  
  // Usar useLocation para obtener los parámetros de la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  useEffect(() => {
    // Establecer toAddress si hay un valor en la URL
    const scannedAddress = queryParams.get('toAddress');
    if (scannedAddress) {
      setToAddress(scannedAddress);
    }
  }, [queryParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    if (authLoading || !user || !user.id) {
      setIsError(true);
      setMessage('Error: no se pudo obtener el ID del usuario.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/simulate-transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: user.id,
          toAddress,
          amount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Transferencia exitosa. TXID: ${data.txid}. Saldo restante: ${data.remainingBalance}`);
        setToAddress('');
        setAmount('');
      } else {
        setIsError(true);
        setMessage(data.error || 'Error al realizar la transferencia.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Error de conexión. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressChange = (e) => {
    setToAddress(e.target.value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) {
      parts.pop();
    }
    setAmount(parts.join('.'));
  };

  if (authLoading) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-custom-bg-2 bg-cover h-screen w-full flex flex-col">
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florNoSession2-ykZ6pmH83254KYvFEmdXnneZqQROQg.svg" 
              alt="Margaritas Logo" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-4">Transferir Margaritas</h2>
            <p className="text-gray-600 text-center mb-6">Ingrese los detalles de la transferencia</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección de destino
                </label>
                <input
                  id="toAddress"
                  value={toAddress}
                  onChange={handleAddressChange}
                  placeholder="Ingrese la dirección de destino"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Monto
                </label>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Ingrese el monto a transferir"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                }`}
              >
                {isLoading ? 'Procesando...' : 'Transferir'}
              </button>
            </form>
            {message && (
              <div className={`mt-4 p-3 rounded-md ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                <p className="text-sm">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
