import crypto from "crypto";


export const getBinanceAccount = async (req, res) => {
    const apiKey = '1r4Y96b5OtQkBFMS7ByanQCdPkzopyFjzLia4Aa94J1UB92BWaDka5TTCeo3iU9L';
    const apiSecret = '3Q6LeFHd42mmmslqtAxuT64yaOv5PNNwLZU2yuE3KNZQu39pRcxkvmMIOoQ7QlYR';
    const baseURL = 'https://testnet.binance.vision';

    try {
        const timestamp = Date.now();

        // Crear la query string con el timestamp
        const queryString = `timestamp=${timestamp}`;

        // Generar la firma HMAC SHA256 utilizando la API secret
        const signature = crypto.createHmac('sha256', apiSecret)
            .update(queryString)
            .digest('hex');

        // Construir la URL final con la firma
        const url = `${baseURL}/api/v3/account?${queryString}&signature=${signature}`;

        // Hacer la solicitud a la API de Binance
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-MBX-APIKEY': apiKey, // Enviar la API key en los headers
            },
        });

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({
                error: 'Error en la respuesta de Binance',
                details: errorData,
            });
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Responder con los datos de la cuenta de Binance
        return res.status(200).json({
            message: 'Datos de la cuenta de Binance obtenidos con éxito',
            data,
        });

    } catch (error) {
        console.error('Error al obtener los datos de la cuenta de Binance:', error);

        // Enviar error genérico al cliente
        return res.status(500).json({
            error: 'Error al obtener los datos de la cuenta de Binance',
            details: error.message,
        });
    }
};

export const simulateBinanceTransfer = async (req, res) => {
    const apiKey = '1r4Y96b5OtQkBFMS7ByanQCdPkzopyFjzLia4Aa94J1UB92BWaDka5TTCeo3iU9L';
    const apiSecret = '3Q6LeFHd42mmmslqtAxuT64yaOv5PNNwLZU2yuE3KNZQu39pRcxkvmMIOoQ7QlYR';
    const baseURL = 'https://testnet.binance.vision';
    const { amount, cryptoSymbol, fromAccountType, toAccountType } = req.body;

    if (!amount || !cryptoSymbol || !fromAccountType || !toAccountType) {
        return res.status(400).json({ error: 'Faltan parámetros para la transferencia' });
    }

    try {
        const endpoint = '/sapi/v1/asset/transfer';
        const timestamp = Date.now();
        const queryString = `asset=${cryptoSymbol}&amount=${amount}&type=${fromAccountType}_${toAccountType}&timestamp=${timestamp}`;

        // Generar la firma HMAC SHA256
        const signature = crypto.createHmac('sha256', apiSecret)
            .update(queryString)
            .digest('hex');

        const url = `${baseURL}${endpoint}?${queryString}&signature=${signature}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-MBX-APIKEY': apiKey,
                'Content-Type': 'application/json',
            },
        });

        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (!response.ok) {
                console.error('Error en la respuesta de Binance:', data);
                return res.status(response.status).json(data);
            }
            res.json(data); // Simulación exitosa
        } else {
            const errorHtml = await response.text(); // Capturar el HTML de error
            console.error('Respuesta inesperada de Binance:', errorHtml);
            return res.status(500).json({ error: 'Respuesta inesperada de Binance', html: errorHtml });
        }
    } catch (error) {
        console.error('Error al simular la transferencia:', error);
        res.status(500).json({ error: 'Error al simular la transferencia' });
    }
};

